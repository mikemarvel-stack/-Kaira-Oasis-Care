-- Add email_sent column to contact_submissions table
ALTER TABLE public.contact_submissions
ADD COLUMN email_sent BOOLEAN NOT NULL DEFAULT false;

-- Update the existing records to reflect email status
UPDATE public.contact_submissions 
SET email_sent = true 
WHERE created_at > NOW() - INTERVAL '24 hours';
