// Environment variable validation
const requiredEnvVars = {
  VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_PUBLISHABLE_KEY: process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  VITE_CONTACT_EMAIL: process.env.VITE_CONTACT_EMAIL,
} as const;

// Validate environment variables
export const validateEnv = () => {
  const missing = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    return false;
  }
  return true;
};

// Export validated environment variables with fallbacks
export const env = {
  supabaseUrl: requiredEnvVars.VITE_SUPABASE_URL || '',
  supabaseKey: requiredEnvVars.VITE_SUPABASE_PUBLISHABLE_KEY || '',
  contactEmail: requiredEnvVars.VITE_CONTACT_EMAIL || 'kdkinteh@yahoo.com',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;