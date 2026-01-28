import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const MAX_SUBMISSIONS_PER_WINDOW = 3;
const RATE_LIMIT_WINDOW = 60000;
const submissionTimes: number[] = [];

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    while (submissionTimes.length > 0 && submissionTimes[0] < now - RATE_LIMIT_WINDOW) {
      submissionTimes.shift();
    }

    if (submissionTimes.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      return false;
    }

    submissionTimes.push(now);
    return true;
  };

  const submitForm = async (data: ContactFormData): Promise<{ success: boolean }> => {
    setIsSubmitting(true);

    try {
      if (!checkRateLimit()) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment before submitting another request.",
          variant: "destructive",
        });
        return { success: false };
      }

      const validatedData = contactSchema.parse(data);

      // Submit directly to FormSubmit
      const formData = new FormData();
      formData.append('_to', 'kdkinteh@yahoo.com');
      formData.append('_subject', `Contact Request from ${validatedData.firstName} ${validatedData.lastName}`);
      formData.append('_replyto', validatedData.email);
      formData.append('name', `${validatedData.firstName} ${validatedData.lastName}`);
      formData.append('email', validatedData.email);
      formData.append('phone', validatedData.phone || 'Not provided');
      formData.append('message', validatedData.message);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/kdkinteh@yahoo.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Request Submitted",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        return { success: true };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0]?.message || "Please check your input.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Unable to send your message. Please try again or contact us directly.",
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
