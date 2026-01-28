import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

// Simple email sending via a third-party service
// Using FormSubmit.co as a free alternative that doesn't require API keys
async function sendEmailViaFormSubmit(
  data: ContactRequestBody
): Promise<{ success: boolean; error?: string }> {
  try {
    const formData = new FormData();
    formData.append("email", "kdkinteh@yahoo.com");
    formData.append("name", `${data.firstName} ${data.lastName}`);
    formData.append("replyto", data.email);
    formData.append("subject", `New Contact Request from ${data.firstName} ${data.lastName}`);
    formData.append(
      "message",
      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n${
        data.phone ? `Phone: ${data.phone}\n` : ""
      }Message:\n${data.message}`
    );

    const response = await fetch("https://formsubmit.co/ajax/kdkinteh@yahoo.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("FormSubmit error:", error);
    return { success: false, error: "Email service error" };
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body as ContactRequestBody;

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send email
    const emailResult = await sendEmailViaFormSubmit(body);

    if (emailResult.success) {
      return res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        error: emailResult.error || "Failed to send email",
      });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
