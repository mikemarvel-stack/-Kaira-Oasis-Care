import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Invalid submission").optional(), // Spam prevention
});

export type ContactFormData = z.infer<typeof contactSchema>;

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // ms
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;

// In-memory rate limiting (resets on page reload)
const submissionTimes: number[] = [];

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    // Remove old submissions outside the window
    while (submissionTimes.length > 0 && submissionTimes[0] < now - RATE_LIMIT_WINDOW) {
      submissionTimes.shift();
    }

    if (submissionTimes.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      return false;
    }

    submissionTimes.push(now);
    return true;
  };

  const submitForm = async (data: ContactFormData, attempt = 1): Promise<{ success: boolean }> => {
    setIsSubmitting(true);

    try {
      // Check rate limit
      if (!checkRateLimit()) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment before submitting another request.",
          variant: "destructive",
        });
        return { success: false };
      }

      // Validate data
      const validatedData = contactSchema.parse(data);

      // Call Edge Function to send email
      const { data: functionData, error: functionError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            email: validatedData.email,
            phone: validatedData.phone || null,
            message: validatedData.message,
          },
        }
      );

      if (functionError) {
        // Retry logic for network/transient errors
        if (attempt < MAX_RETRIES && functionError.message.includes("Network")) {
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
          return submitForm(data, attempt + 1);
        }
        throw functionError;
      }

      // Submit to database
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone || null,
        message: validatedData.message,
      });

      if (dbError) {
        // Retry logic for network/transient errors
        if (attempt < MAX_RETRIES && dbError.message.includes("Network")) {
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
          return submitForm(data, attempt + 1);
        }
        // Log database error but don't fail since email was sent
        console.error("Database error:", dbError);
      }

      toast({
        title: "Request Submitted",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      return { success: true };
    } catch (error) {
      console.error("Form submission error:", error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0]?.message || "Please check your input.",
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        // Distinguish between network and server errors
        if (error.message.includes("Network")) {
          toast({
            title: "Network Error",
            description: "Please check your connection and try again.",
            variant: "destructive",
          });
        } else if (error.message.includes("401") || error.message.includes("403")) {
          toast({
            title: "Authentication Error",
            description: "There's a configuration issue. Please contact support.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Submission Failed",
            description: "There was an error submitting your request. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Submission Failed",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }

      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
