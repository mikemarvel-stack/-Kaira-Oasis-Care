import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60000; // 1 minute

function getRateLimitKey(req: VercelRequest): string {
  return req.headers['x-forwarded-for'] as string || req.connection?.remoteAddress || 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

function validateInput(body: any): body is ContactRequestBody {
  return (
    typeof body.firstName === 'string' && body.firstName.trim().length > 0 &&
    typeof body.lastName === 'string' && body.lastName.trim().length > 0 &&
    typeof body.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) &&
    typeof body.message === 'string' && body.message.trim().length >= 10 &&
    (!body.phone || typeof body.phone === 'string')
  );
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey)) {
      return res.status(429).json({ error: 'Too many requests' });
    }

    // Input validation
    if (!validateInput(req.body)) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    // Send email
    const formData = new URLSearchParams();
    formData.append('_to', 'kdkinteh@yahoo.com');
    formData.append('_subject', `Contact Request from ${firstName} ${lastName}`);
    formData.append('_replyto', email);
    formData.append('name', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('phone', phone || 'Not provided');
    formData.append('message', message);
    formData.append('_captcha', 'false');

    const response = await fetch('https://formsubmit.co/ajax/kdkinteh@yahoo.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      throw new Error('Email service failed');
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}