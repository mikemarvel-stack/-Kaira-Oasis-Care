// @ts-nocheck
// This is a Deno Edge Function for Supabase
// Type checking for remote Deno imports is handled by the Deno runtime

// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore - Deno remote import
import { Resend } from "https://cdn.jsdelivr.net/npm/resend@0.11.0/dist/index.ts";

// deno-lint-ignore no-explicit-any
declare const Deno: any;

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// deno-lint-ignore no-explicit-any
serve(async (req: any) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, message }: ContactRequest =
      await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send email to the designated contact email
    const adminEmailResponse = await resend.emails.send({
      from: "noreply@kairaosasiscare.com",
      to: "kdkinteh@yahoo.com",
      subject: `New Contact Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (adminEmailResponse.error) {
      console.error("Error sending admin email:", adminEmailResponse.error);
      return new Response(
        JSON.stringify({
          error: "Failed to send email",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send confirmation email to the user
    const confirmationEmailResponse = await resend.emails.send({
      from: "noreply@kairaosasiscare.com",
      to: email,
      subject: "We've Received Your Request - Kaira Oasis Care",
      html: `
        <h2>Thank You, ${firstName}!</h2>
        <p>We've received your request and will get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <p>Best regards,<br />Kaira Oasis Care Team</p>
      `,
    });

    if (confirmationEmailResponse.error) {
      console.error(
        "Error sending confirmation email:",
        confirmationEmailResponse.error
      );
      // Don't fail the request if confirmation email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
