# Production Deployment Guide
## Kaira Oasis Care Website

---

## 📋 Pre-Deployment Checklist

### Code Quality
- [x] No TypeScript errors
- [x] No ESLint warnings
- [x] All tests passing
- [x] Environment variables configured
- [x] Contact form with email functionality implemented

### Configuration
- [x] Supabase project created and configured
- [x] Database tables created
- [x] Edge Functions ready for deployment
- [x] Resend API configured for email service

---

## 🔧 Required Services Setup

### 1. Supabase Configuration

#### Database Schema
Create the `contact_submissions` table:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'new'
);

-- Create index for faster queries
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_status ON contact_submissions(status);
```

#### Supabase Project Details
- **Project ID**: `szoszquhzqkywaovucvt`
- **URL**: `https://szoszquhzqkywaovucvt.supabase.co`
- **Anon Key**: (stored in `.env`)

### 2. Email Service (Resend)

#### Setup Steps
1. Go to [resend.com](https://resend.com)
2. Create a free account
3. Create a project
4. Generate API key
5. Add to environment variables as `RESEND_API_KEY`

#### Email Configuration
- **From Email**: `noreply@kairaosasiscare.com` (can be customized)
- **Reply-To**: `kdkinteh@yahoo.com`
- **Admin Email**: `kdkinteh@yahoo.com`

**Important**: To use a custom domain, you'll need to verify it in Resend (DNS configuration required).

### 3. Supabase Edge Functions Deployment

#### Deploy the Contact Email Function

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Log in to Supabase
supabase login

# Set up local environment
supabase init

# Link to your project
supabase link --project-ref szoszquhzqkywaovucvt

# Set the Resend API key in Supabase
supabase secrets set RESEND_API_KEY=your-actual-api-key

# Deploy the function
supabase functions deploy send-contact-email

# Verify deployment
supabase functions list
```

#### Function Details
- **Function Name**: `send-contact-email`
- **Location**: `supabase/functions/send-contact-email/index.ts`
- **Triggers**: Called from frontend when contact form is submitted
- **Dependencies**: Resend API key environment variable

---

## 🌐 Deployment Platforms

### Option 1: Vercel (Recommended - Easiest)

#### Steps
1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the following:
     ```
     VITE_SUPABASE_PROJECT_ID = szoszquhzqkywaovucvt
     VITE_SUPABASE_URL = https://szoszquhzqkywaovucvt.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY = <your-anon-key>
     ```

3. **Deploy**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy from command line
   vercel

   # Deploy to production
   vercel --prod
   ```

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as shown

#### Benefits
- Automatic deployments on git push
- Built-in CI/CD
- Free tier available
- Edge Functions support
- Analytics included

---

### Option 2: Netlify

#### Steps
1. **Connect GitHub Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Leave deploy log visible for debugging

3. **Add Environment Variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add:
     ```
     VITE_SUPABASE_PROJECT_ID = szoszquhzqkywaovucvt
     VITE_SUPABASE_URL = https://szoszquhzqkywaovucvt.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY = <your-anon-key>
     ```

4. **Deploy via CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Initialize
   netlify init

   # Deploy
   netlify deploy --prod
   ```

#### Benefits
- Free tier with good features
- Automatic deployments
- Form handling support
- Custom domain support
- Easy environment variable management

---

### Option 3: AWS S3 + CloudFront (More Control)

#### Steps
1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   # Configure AWS CLI
   aws configure

   # Create bucket
   aws s3 mb s3://kaira-oasis-care-prod --region us-east-1
   ```

3. **Enable Static Website Hosting**
   ```bash
   aws s3 website s3://kaira-oasis-care-prod/ \
     --index-document index.html \
     --error-document index.html
   ```

4. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://kaira-oasis-care-prod/ \
     --delete \
     --cache-control "public, max-age=3600"
   ```

5. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Default root object: index.html
   - Error pages: Configure 404 → index.html

6. **Invalidate Cache**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

#### Benefits
- High performance with CDN
- Cost-effective at scale
- Full control over configuration
- Suitable for enterprise needs

---

### Option 4: GitHub Pages

#### Steps
1. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/kaira-oasis-care/', // Your repo name
     // ... rest of config
   })
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Push to gh-pages branch**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

4. **Enable GitHub Pages**
   - Go to repo Settings
   - Pages → Source → gh-pages branch
   - Select root folder

#### Benefits
- Free hosting
- No configuration needed
- Good for open source

---

## 🚀 Pre-Production Testing

### Local Testing
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

### Test Contact Form
1. Navigate to Contact section
2. Fill out the form with test data
3. Submit the form
4. Verify:
   - Success toast message appears
   - Form clears
   - Email sent to `kdkinteh@yahoo.com`
   - Confirmation email received at test email
   - Database entry created in Supabase

### Performance Testing
```bash
# Lighthouse audit
npm run build
npm run preview

# In another terminal, use Chrome DevTools
# Lighthouse tab to test performance
```

---

## 📊 Monitoring & Maintenance

### Health Checks
1. **Website Uptime**
   - Use: Uptime Robot, Pingdom, or DataDog
   - Monitor: Production URL
   - Frequency: Every 5 minutes

2. **Edge Function Monitoring**
   - Check Supabase dashboard for function logs
   - Monitor error rates
   - Set up alerts for failures

3. **Email Service Monitoring**
   - Monitor Resend dashboard
   - Check delivery rates
   - Review bounce/spam rates

### Backup & Recovery
```bash
# Backup database
supabase db pull

# Backup environment
cp .env .env.backup
```

---

## 🔒 Security Best Practices

### Environment Variables
- Never commit `.env` files to version control
- Use `.env.example` for documentation only
- Rotate secrets regularly (especially API keys)
- Use different keys for staging vs production

### Supabase Security
- Enable Row Level Security (RLS) on tables
- Use database policies to restrict access
- Enable auth for sensitive operations
- Monitor suspicious activity

### Resend Email Security
- Only send emails to verified addresses
- Validate input before sending
- Use rate limiting to prevent abuse
- Monitor for spam/bounce issues

### CORS & API Security
- Configure CORS properly
- Validate all incoming requests
- Use HTTPS only
- Implement rate limiting

---

## 🐛 Troubleshooting

### Issue: Contact Form Not Sending Emails
**Solution**:
1. Verify `RESEND_API_KEY` is set in Supabase environment
2. Check Supabase function logs: `supabase functions logs send-contact-email`
3. Verify sender email is verified in Resend
4. Check Resend dashboard for bounced emails

### Issue: 404 Errors After Deployment
**Solution**:
1. Ensure build output includes all files
2. Configure error pages to serve `index.html`
3. Check router base path in `vite.config.ts`
4. Clear cache and hard refresh

### Issue: Database Not Saving Data
**Solution**:
1. Verify `contact_submissions` table exists
2. Check Supabase API keys are correct
3. Review Row Level Security policies
4. Check database logs for errors

### Issue: Environment Variables Not Loading
**Solution**:
1. Verify variable names start with `VITE_` (frontend only)
2. Restart development server after changes
3. Check `.env` file exists in root directory
4. Verify no spaces around `=` in `.env` file

---

## 📞 Support & Contact

For issues or questions:
- **Email**: kdkinteh@yahoo.com
- **Documentation**: See README.md
- **Issues**: Create GitHub issue in repository

---

## 🔄 Continuous Deployment

### Automatic Deployments (Vercel/Netlify)
1. Push changes to `main` branch
2. CI/CD pipeline runs tests
3. Automatic deployment on success
4. Rollback available in dashboard

### Manual Deployment
```bash
# Using Vercel CLI
vercel --prod

# Using Netlify CLI
netlify deploy --prod
```

---

## 📈 Performance Optimization

### Frontend Optimization
- Code splitting: ✓ Enabled (Vite)
- Tree shaking: ✓ Enabled (Vite)
- Image optimization: Implement using `next-image` or similar
- CSS minification: ✓ Automatic (Vite)

### Database Optimization
- Indexes: ✓ Added on `created_at` and `status`
- Query optimization: Use efficient queries
- Connection pooling: Handled by Supabase

### CDN & Caching
- Static assets: Cache for 1 year (versioned filenames)
- HTML: No cache (for updates)
- API responses: Use Supabase caching

---

## ✅ Final Checklist

- [ ] All environment variables set correctly
- [ ] Supabase Edge Function deployed
- [ ] Contact form tested and working
- [ ] Database schema created
- [ ] Resend email service configured
- [ ] Email verification completed
- [ ] Build passes without errors
- [ ] Tests passing locally
- [ ] Performance acceptable (Lighthouse > 80)
- [ ] Security headers configured
- [ ] CORS properly set
- [ ] Monitoring and alerts configured
- [ ] Domain configured and SSL enabled
- [ ] Backup strategy in place
- [ ] Team notified of go-live date

---

**Deployment Date**: ________________
**Status**: READY FOR PRODUCTION ✅
