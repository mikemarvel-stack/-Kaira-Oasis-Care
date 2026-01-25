# Kaira Oasis Care - Professional Hospice Care Website

> **Nature's Embrace** - Compassionate End-of-Life Care Solutions

A modern, fully-featured web application for Kaira Oasis Care LLC, providing comprehensive information about hospice and palliative care services, family support resources, professional training, and downloadable forms.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![License](https://img.shields.io/badge/license-proprietary-red)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue)
![Vite](https://img.shields.io/badge/vite-5.4.19-646cff)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000?logo=vercel)](https://vercel.com)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Production Build](#production-build)
- [Deployment with Vercel](#deployment-with-vercel)
- [Forms & Resources](#forms--resources)
- [Blog & Content](#blog--content)
- [Database](#database)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)
- [Security Best Practices](#security-best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)

---

## 🎯 Overview

Kaira Oasis Care is a comprehensive digital platform designed to serve patients, families, and healthcare professionals in need of hospice and end-of-life care information. The website provides:

- **Educational Content** - Detailed articles and guides about hospice care
- **Service Information** - Complete overview of care services offered
- **Team Profiles** - Meet our compassionate healthcare professionals
- **Professional Resources** - Downloadable employment and compliance forms (12 total)
- **Grief Support** - Resources for families dealing with loss
- **Contact & Inquiry System** - Direct communication with our team via Supabase integration

**Live Site:** https://kairaoasiscare.com (Deployed on Vercel)

---

## ✨ Key Features

### 🏥 Healthcare Information
- **Comprehensive Services** - Detailed descriptions of all care services with responsive design
- **Team Directory** - Professional profiles with expertise areas and qualifications
- **FAQ Section** - Common questions about hospice care with accordion interface
- **Educational Blog** - 6+ detailed articles about end-of-life care with categorization
- **Search Ready** - Blog posts organized and easily discoverable

### 📱 User Experience
- **Responsive Design** - Perfect on all devices (mobile: 320px, tablet: 768px, desktop: 1024px+)
- **Accessibility** - WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Fast Performance** - Optimized with Vite (build time <1s, initial load <2s)
- **Smooth Navigation** - Intuitive menu and internal linking with hash-based scrolling
- **Dark Mode Support** - Next-themes integration for user preference persistence

### 📋 Forms & Resources
- **12 Downloadable Forms** - Professionally formatted employment and compliance documents
- **Employment Forms** - Application, questionnaire, verification (3 forms)
- **Compliance Documents** - Background checks, drug testing, confidentiality (5 forms)
- **HR Resources** - Grievance forms, payroll authorization, reference requests (4 forms)
- **Professional Development** - College of Direct Support training materials

### 📰 Content Management
- **Blog System** - Full-featured blog with categories and detailed articles
- **Article Detail Pages** - Complete article viewing with related content recommendations
- **Resource Library** - External links and comprehensive guides for patients and families
- **Rich Content** - Support for formatted text, quotes, and structured information

### 🔐 Security & Compliance
- **HIPAA Compliance** - Protected health information handling best practices
- **Data Validation** - Client-side (Zod) and server-side validation
- **Secure Forms** - Encrypted submission handling via Supabase
- **Confidentiality** - Proper data protection measures and privacy policy
- **Row Level Security (RLS)** - Database-level access control

### 🚀 Performance & Optimization
- **Code Splitting** - Automatic route-based code splitting with React Router
- **Lazy Loading** - Images and heavy components loaded on demand
- **Asset Optimization** - Minified CSS/JS, compressed images
- **Caching Strategy** - Vercel edge caching and static generation

---

## 🛠 Tech Stack

### Frontend Core
- **React 18.3.1** - UI framework with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 5.4.19** - Lightning-fast build tool and dev server (<1s rebuild)
- **React Router 6.30.1** - Client-side routing with lazy loading
- **React DOM 18.3.1** - React rendering to DOM

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with JIT compilation
- **PostCSS 8.5.6** - CSS transformation and autoprefixer
- **Tailwind Merge 2.6.0** - Intelligent class merging for dynamic styles
- **Tailwind CSS Animate 1.0.7** - Pre-built animations (fade, slide, bounce)
- **shadcn/ui** - High-quality, unstyled React components (40+ components)
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React 0.462.0** - Beautiful, consistent icon library (1000+ icons)

### Forms & Validation
- **React Hook Form 7.61.1** - Performant form handling with minimal re-renders
- **Zod 3.25.76** - TypeScript-first schema validation with inference
- **@hookform/resolvers 3.10.0** - Adapter for form validation libraries

### State Management & Data
- **TanStack Query 5.83.0** - Server state management (caching, synchronization)
- **React Query** - Automatic background refetching and data synchronization
- **Date-fns 3.6.0** - Modern date utility library

### Backend & Services
- **Supabase JS 2.91.0** - PostgreSQL database client with auth support
- **Supabase PostgREST** - Auto-generated REST API from database schema

### UI Components & Interactions
- **Sonner 1.7.4** - Toast notifications with beautiful animations
- **Vaul 0.9.9** - Unstyled drawer component
- **Embla Carousel 8.6.0** - Carousel/slider component
- **React Resizable Panels 2.1.9** - Resizable panel layouts
- **Command Menu (cmdk)** - Command palette component
- **Next-themes 0.3.0** - Dark/light theme management
- **Class Variance Authority 0.7.1** - Type-safe component variants

### Testing & Quality
- **Vitest 3.2.4** - Lightning-fast unit test framework (Vite-native)
- **Testing Library React 16.0.0** - Testing utilities for React components
- **JSDOM 20.0.3** - DOM implementation for testing
- **ESLint 9.32.0** - Code quality and style linting
- **@typescript-eslint** - TypeScript linting rules

### Build & Deployment
- **Vite 5.4.19** - Build tool with instant HMR and optimized production builds
- **@vitejs/plugin-react-swc** - React plugin with SWC for faster compilation
- **Vercel** - Serverless hosting with edge functions and automatic deployments
- **npm/bun** - Package management (bun recommended for faster installs)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- **Node.js** v16 or higher ([download](https://nodejs.org/)) - Check with `node --version`
- **npm** v7+ or **yarn** v1.22+ or **bun** v1.0+ ([install bun](https://bun.sh))
- **Git** for version control ([download](https://git-scm.com))
- **Supabase Account** ([create free account](https://supabase.com)) - PostgreSQL database hosting

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/your-org/kaira-oasis-care.git
cd "kaira-oasis-care"
```

#### 2. Install Dependencies

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

**Using bun (recommended - 3x faster):**
```bash
bun install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the project root with your configuration:

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# Supabase Configuration (https://app.supabase.com)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-public-key-here

# Optional: Custom API endpoints
VITE_API_URL=http://localhost:3000

# Email configuration for contact forms
VITE_CONTACT_EMAIL=kdkinteh@yahoo.com
```

**How to get Supabase credentials:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to Settings → API
4. Copy "Project URL" → `VITE_SUPABASE_URL`
5. Copy "Publishable key (anon)" → `VITE_SUPABASE_PUBLISHABLE_KEY`

#### 4. Set Up Supabase Database

Create the contact submissions table in Supabase:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  status TEXT DEFAULT 'new',
  is_read BOOLEAN DEFAULT false
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_email 
  ON contact_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public insert"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Allow authenticated reads
CREATE POLICY "Allow authenticated select"
  ON contact_submissions FOR SELECT
  USING (auth.role() = 'authenticated');
```

**Execute this SQL:**
1. In Supabase Dashboard, go to SQL Editor
2. Paste the SQL above
3. Click "Run"
4. Verify table appears in "Tables" section

#### 5. Start Development Server

```bash
npm run dev
```

The application opens automatically at:
- **Local:** http://localhost:5173
- **Network:** Check console output for your LAN IP (e.g., http://192.168.1.x:5173)

---

## 📁 Project Structure

```
kaira-oasis-care/
├── public/                          # Static assets
│   ├── robots.txt                   # SEO robots directives
│   ├── favicon.ico                  # Website icon
│   └── forms/                       # Downloadable form templates (12 files)
│       ├── Employment-Application.txt
│       ├── Background-Consent-Form.txt
│       ├── Drug-Testing-Consent.txt
│       ├── Code-of-Conduct-Agreement.txt
│       ├── Confidentiality-Agreement.txt
│       ├── Central-Registry-Check.txt
│       ├── College-Direct-Support.txt
│       ├── Direct-Deposit-Authorization.txt
│       ├── Employment-Verification.txt
│       ├── Grievance-Procedure.txt
│       ├── Job-Questionnaire.txt
│       └── Reference-Request.txt
│
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── ui/                      # shadcn/ui components (45+ components)
│   │   │   ├── button.tsx           # Variants: primary, secondary, outline, ghost
│   │   │   ├── card.tsx             # Card container component
│   │   │   ├── form.tsx             # React Hook Form integration
│   │   │   ├── input.tsx            # Text input field
│   │   │   ├── textarea.tsx         # Multi-line text input
│   │   │   ├── accordion.tsx        # Collapsible accordion
│   │   │   ├── dialog.tsx           # Modal dialog
│   │   │   ├── dropdown-menu.tsx    # Dropdown menu
│   │   │   ├── avatar.tsx           # User avatar
│   │   │   ├── badge.tsx            # Status badge
│   │   │   ├── tabs.tsx             # Tab navigation
│   │   │   ├── select.tsx           # Dropdown select
│   │   │   ├── radio-group.tsx      # Radio buttons
│   │   │   ├── checkbox.tsx         # Checkboxes
│   │   │   ├── slider.tsx           # Slider input
│   │   │   ├── progress.tsx         # Progress bar
│   │   │   ├── table.tsx            # Data table
│   │   │   ├── sheet.tsx            # Side sheet drawer
│   │   │   ├── sidebar.tsx          # Sidebar component
│   │   │   ├── carousel.tsx         # Image carousel
│   │   │   ├── chart.tsx            # Chart components
│   │   │   └── ... (25+ more)
│   │   │
│   │   ├── About.tsx                # About section component
│   │   ├── BlogPreview.tsx          # Blog preview card component
│   │   ├── Contact.tsx              # Contact form with validation
│   │   ├── ErrorBoundary.tsx        # Error handling wrapper
│   │   ├── FAQ.tsx                  # FAQ accordion section
│   │   ├── Footer.tsx               # Footer with links and info
│   │   ├── Header.tsx               # Navigation header/navbar
│   │   ├── Hero.tsx                 # Hero banner section
│   │   ├── Services.tsx             # Services showcase grid
│   │   ├── Team.tsx                 # Team profiles carousel
│   │   └── Testimonials.tsx         # Client testimonials section
│   │
│   ├── pages/                       # Full page components
│   │   ├── Index.tsx                # Home page (landing)
│   │   ├── ServicesPage.tsx         # Services detail page
│   │   ├── AboutPage.tsx            # About company page
│   │   ├── BlogPage.tsx             # Blog listing with search
│   │   ├── BlogDetailPage.tsx       # Individual blog article
│   │   ├── ResourcesPage.tsx        # Resources & forms download
│   │   └── NotFound.tsx             # 404 error page
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Mobile device detection hook
│   │   ├── use-toast.ts             # Toast notification hook
│   │   └── useContactForm.ts        # Contact form logic hook
│   │
│   ├── lib/                         # Utility functions & constants
│   │   ├── constants.ts             # App configuration (IMPORTANT - edit to customize)
│   │   └── utils.ts                 # Helper functions (cn for Tailwind classes)
│   │
│   ├── integrations/                # External service integrations
│   │   └── supabase/
│   │       ├── client.ts            # Supabase client instance
│   │       └── types.ts             # TypeScript types for database
│   │
│   ├── test/                        # Test files (Vitest)
│   │   ├── constants.test.ts        # Constants validation tests
│   │   ├── contact.test.tsx         # Contact form component tests
│   │   ├── setup.ts                 # Test environment setup
│   │   └── example.test.ts          # Example test template
│   │
│   ├── assets/                      # Images and media files
│   │
│   ├── App.tsx                      # Root component with routing
│   ├── App.css                      # Global component styles
│   ├── index.css                    # Base styles and Tailwind directives
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts                # Vite environment type definitions
│
├── supabase/                        # Supabase configuration
│   ├── config.toml                  # Local development config
│   └── migrations/                  # Database migrations
│
├── .github/                         # GitHub configuration
│   ├── workflows/                   # CI/CD workflows
│   └── dependabot.yml               # Automated dependency updates
│
├── .vercel/                         # Vercel configuration (auto-generated)
│   └── project.json
│
├── eslint.config.js                 # ESLint linting rules
├── tsconfig.json                    # TypeScript base configuration
├── tsconfig.app.json                # App-specific TypeScript config
├── tsconfig.node.json               # Node-specific TypeScript config
├── vite.config.ts                   # Vite build configuration
├── vitest.config.ts                 # Vitest test configuration
├── tailwind.config.ts               # Tailwind CSS theme customization
├── postcss.config.js                # PostCSS plugins configuration
├── components.json                  # shadcn/ui configuration
├── vercel.json                      # Vercel deployment configuration
├── package.json                     # Project dependencies and scripts
├── bun.lockb                        # Bun lock file (if using bun)
├── .env.example                     # Environment variables template
├── .env.local                       # Local environment variables (git-ignored)
├── .gitignore                       # Git ignore rules
├── LICENSE                          # Proprietary license
├── README.md                        # This file
├── FORMS_GUIDE.md                   # Comprehensive forms documentation
├── QUICK_START.md                   # Quick start guide
└── IMPROVEMENTS_SUMMARY.md          # Development improvements log
```

---

## ⚙️ Environment Configuration

### Configuration Files

#### `.env.local` (Local Development)
```env
# Required for development
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIs...

# Optional
VITE_API_URL=http://localhost:3000
VITE_CONTACT_EMAIL=kdkinteh@yahoo.com
```

#### `src/lib/constants.ts` (Application Configuration)

All company information is centralized here. Update to customize:

```typescript
export const ORGANIZATION = {
  name: "Kaira Oasis Care LLC",
  tagline: "Nature's Embrace",
  founded: 1995,
  description: "Providing compassionate hospice care...",
  mission: "To provide...",
  values: ["Compassion", "Excellence", "Integrity"],
  logo: {
    initials: "KO",
  },
};

export const CONTACT = {
  phone: "+1.502.648.4862",
  email: "kdkinteh@yahoo.com",
  address: "6400 Linstead Road",
  city: "Louisville",
  state: "KY",
  zipCode: "40228",
  country: "US",
};

export const SOCIAL_MEDIA = {
  facebook: "https://facebook.com/kairaoasiscare",
  linkedin: "https://linkedin.com/company/kairaoasiscare",
  twitter: "https://twitter.com/kairaoasiscare",
};
```

#### `tailwind.config.ts` (Styling)

Customize colors, fonts, and theme:

```typescript
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          // Custom color palette
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
```

#### `vite.config.ts` (Build Configuration)

```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
```

---

## 👨‍💻 Development

### Available Scripts

```bash
# Start development server with hot reload (auto-refresh on file changes)
npm run dev

# Build for production (creates optimized dist/ folder)
npm run build

# Build with development settings (faster but larger build)
npm run build:dev

# Preview production build locally (before deploying)
npm run preview

# Run tests once (Vitest)
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch

# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint -- --fix
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Application opens at http://localhost:5173

3. **Make changes** - Files automatically reload in browser

4. **Run tests and linting**
   ```bash
   npm test
   npm run lint -- --fix
   ```

5. **Commit with clear messages**
   ```bash
   git add .
   git commit -m 'feat: add new feature description'
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request** on GitHub for code review

### Code Quality Standards

- **TypeScript** - Use strict mode, avoid `any` types
- **Components** - Keep components small and focused (under 200 lines)
- **Naming** - Use descriptive camelCase for variables, PascalCase for components
- **Comments** - Document complex logic and business rules
- **Testing** - Aim for 80%+ coverage on critical paths
- **Performance** - Use React.memo, useCallback, useMemo appropriately
- **Accessibility** - Use semantic HTML, ARIA labels, keyboard navigation

### Hot Module Replacement (HMR)

Vite provides instant HMR:
- **React components** - Auto-refresh with state preservation
- **CSS changes** - Apply without full page reload
- **Templates** - Update instantly

---

## 📦 Production Build

### Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder containing:
- Minified JavaScript (code splitting by route)
- Optimized CSS (unused styles removed)
- Compressed images
- Source maps (for debugging in production)

**Build output:**
```
dist/
├── index.html               # Main entry point
├── assets/
│   ├── index-abc123.js      # Main JavaScript bundle
│   ├── index-def456.css     # Main CSS bundle
│   └── img-xyz789.webp      # Optimized images
└── forms/                   # Static form files
```

### Build Time Optimization

The build process is optimized with:
- **SWC Compiler** - Faster TypeScript compilation (5-10x faster than Babel)
- **Code Splitting** - Automatic route-based splitting
- **Tree Shaking** - Unused code removal
- **CSS Minification** - PostCSS optimization
- **Image Optimization** - WebP conversion

**Typical build metrics:**
- Build time: 15-30 seconds
- Output size: ~150-200KB gzipped
- Lighthouse score: 95+

### Build Verification

```bash
# Preview production build
npm run preview

# Check build size
du -sh dist/

# Test production build locally
npx http-server dist/
```

---

## 🚀 Deployment with Vercel

### Why Vercel?

Vercel is the optimal choice for this project because:
- ✅ **Native Vite Support** - Auto-detects and optimizes Vite builds
- ✅ **Zero Configuration** - Works out of the box
- ✅ **Edge Functions** - Deploy serverless functions at edge locations
- ✅ **Automatic Deployments** - Git push triggers production deployment
- ✅ **Environment Variables** - Secure secret management
- ✅ **Analytics** - Built-in performance monitoring
- ✅ **Preview URLs** - Share preview of PRs with stakeholders
- ✅ **Free Tier** - Generous free tier for personal projects
- ✅ **SSL/TLS** - Automatic HTTPS on all deployments
- ✅ **CDN** - Global edge network for fast delivery

### Prerequisites for Vercel Deployment

1. **GitHub Account** ([create here](https://github.com/signup))
2. **Vercel Account** ([create here](https://vercel.com/signup))
3. **Repository on GitHub** with this code pushed

### Step 1: Connect Repository to Vercel

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Connect your GitHub account
5. Select the `kaira-oasis-care` repository
6. Click "Import"

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Link to existing Vercel project
vercel link
```

### Step 2: Configure Project Settings

In Vercel Dashboard → Project Settings:

1. **Framework Preset:** Select "Vite" (auto-detected)
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install` or `bun install`

### Step 3: Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY = your-publishable-key
VITE_CONTACT_EMAIL = kdkinteh@yahoo.com
```

**Important:** Make sure to add these for all environments:
- ✓ Production
- ✓ Preview
- ✓ Development

### Step 4: Deploy

Vercel automatically deploys when you push to your repository:

```bash
# Trigger production deployment
git push origin main

# Or deploy manually via CLI
vercel --prod

# Deploy as preview (optional)
vercel
```

### Deployment URLs

After deployment, you'll get:

- **Production URL:** https://kairaoasiscare.com (or your custom domain)
- **Preview URLs:** https://project-name-git-branch.vercel.app
- **Pull Request Preview:** Auto-generated for each PR

### Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., kairaoasiscare.com)
4. Follow DNS configuration steps (CNAME or A record)
5. Verify domain ownership

**DNS Configuration Example (Cloudflare):**
```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
```

### Monitoring Deployments

**View Deployment Status:**
1. Vercel Dashboard → Deployments
2. Click on deployment to view:
   - Build logs
   - Runtime logs
   - Deployment preview
   - Performance metrics

**Get Deployment Notifications:**
1. Settings → Notifications
2. Enable email/Slack alerts for:
   - Deployment started
   - Deployment completed
   - Deployment failed

### Troubleshooting Vercel Deployment

#### Issue: Build Failed
```
Check build logs:
Vercel Dashboard → Deployments → [failed deployment] → Build Logs

Common causes:
- Missing environment variables
- Node.js version mismatch
- Missing dependencies in package.json
```

#### Issue: Environment Variables Not Found
```
Solution:
1. Verify variables are set for correct environment
2. Check variable names match .env.local
3. Redeploy after adding variables (old builds won't see new vars)
4. Use vercel env ls to list all variables
```

#### Issue: Static Files Not Loading
```
Ensure public/ files are in correct location:
- Images: public/images/
- Forms: public/forms/
- Rebuild and redeploy
```

### Performance Optimization on Vercel

**Enable Vercel Optimizations:**

1. **Automatic Compression** - Gzip/Brotli enabled by default
2. **Image Optimization** - Add `vercel.json`:

```json
{
  "images": {
    "sizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    "domains": ["images.unsplash.com"]
  }
}
```

3. **Function Edge Caching** - Use ISR/SSG where applicable
4. **Cache Control Headers** - Set in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### GitHub Integration

**Automatic Workflows:**

- ✅ Push to `main` → Deploy to production
- ✅ Push to `develop` → Deploy preview
- ✅ Open PR → Create preview deployment
- ✅ Push to feature branch → Preview available

**View PR Previews:**
1. Open PR on GitHub
2. Look for "vercel[bot]" comment
3. Click preview URL
4. Preview auto-updates on new commits

### Production Checklist

Before going live, verify:

- [ ] Environment variables set in Vercel
- [ ] Supabase database tables created
- [ ] HTTPS enabled (automatic)
- [ ] Domain configured and DNS updated
- [ ] Monitoring and alerts set up
- [ ] Error tracking configured
- [ ] Analytics enabled
- [ ] Legal pages (privacy, terms) added
- [ ] Contact form tested end-to-end
- [ ] All forms downloadable and complete

### Rollback a Deployment

If deployment has issues:

```bash
# Via Vercel Dashboard:
1. Deployments → Select previous stable deployment
2. Click "..." → Promote to Production

# Via CLI:
vercel rollback
```

---

## 📋 Forms & Resources

### Downloadable Forms (12 Total)

#### Employment & Application (3 forms)
1. **Employment-Application.txt** - Complete application form for new hires
2. **Job-Questionnaire.txt** - Job-specific assessment questions
3. **Employment-Verification.txt** - Verification of employment letter

#### Compliance & Screening (5 forms)
4. **Background-Consent-Form.txt** - Authorization for background check
5. **Central-Registry-Check.txt** - Registry screening consent
6. **Drug-Testing-Consent.txt** - Drug test authorization
7. **Code-of-Conduct-Agreement.txt** - Professional conduct commitment
8. **Confidentiality-Agreement.txt** - NDA and confidentiality terms

#### HR & Payroll (4 forms)
9. **Direct-Deposit-Authorization.txt** - Banking information for direct deposit
10. **Grievance-Procedure.txt** - Employee grievance filing process
11. **Reference-Request.txt** - Request for professional references
12. **College-Direct-Support.txt** - Professional development program enrollment

### Download Forms

Forms are located in `public/forms/` and can be downloaded via:

**From Website:**
- Resources page → Click "Download" button for each form
- Opens in new tab, user can save as .txt

**Direct URL:**
```
https://kairaoasiscare.com/forms/Employment-Application.txt
https://kairaoasiscare.com/forms/Background-Consent-Form.txt
```

### Updating Forms

To update a form:

1. Edit the file in `public/forms/form-name.txt`
2. Commit and push to GitHub
3. Vercel auto-deploys new version
4. Form available immediately at new URL

**Note:** Always keep plain text format for universal compatibility

---

## 📰 Blog & Content

### Blog Features

- **6+ Articles** - Comprehensive guides about hospice care
- **Categorization** - Organized by topic (Education, Care Tips, etc.)
- **Detail Pages** - Full-page article viewing
- **Related Content** - Suggestions for further reading
- **Search Ready** - Blog posts indexed and discoverable

### Featured Articles

1. **Understanding Hospice Care: A Complete Guide**
   - What is hospice care?
   - When is hospice care appropriate?
   - Hospice vs palliative care

2. **Pain Management in Hospice Care**
   - Comfort-focused approach
   - Managing symptoms
   - Quality of life priorities

3. **Creating Meaningful Moments**
   - Family time activities
   - Legacy documentation
   - End-of-life wishes

4. **Supporting Your Loved One: A Caregiver's Guide**
   - Caregiver responsibilities
   - Self-care for caregivers
   - Available resources

5. **The Grief Journey: Understanding Loss and Healing**
   - Grief process stages
   - Coping strategies
   - Support resources

6. **Advance Directives and End-of-Life Planning**
   - Healthcare directives
   - Legal documents needed
   - Planning conversations

### Adding New Blog Posts

Edit `src/pages/BlogPage.tsx`:

```typescript
const blogPosts = [
  {
    title: "Your Article Title",
    excerpt: "Brief summary for preview",
    author: "Author Name",
    date: "January 22, 2026",
    category: "Education",
    image: articleImage,
    slug: "article-url-slug",
    content: `
      Full article content here...
      
      Use markdown or plain HTML.
      Support for paragraphs, lists, quotes.
    `,
  },
  // Add more articles...
];
```

**Fields:**
- `title` - Article headline (60 chars max for SEO)
- `excerpt` - Preview text (150-160 chars)
- `author` - Writer name
- `date` - Publication date (MMM DD, YYYY)
- `category` - Topic category (for filtering)
- `image` - Featured image (import from assets)
- `slug` - URL-friendly identifier (lowercase, hyphens)
- `content` - Full article text

### Blog Structure

```
Blog Page
├── Hero Section (search, filter)
├── Blog Posts Grid
│   ├── Post Card 1
│   ├── Post Card 2
│   └── Post Card 3...
│
└── Blog Detail Page
    ├── Featured Image
    ├── Title & Metadata
    ├── Article Content
    ├── Author Info
    ├── Share Buttons
    └── Related Articles
```

---

## 🗄️ Database

### Supabase Setup

#### Create Supabase Account
1. Visit [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub or email
4. Create new project
5. Choose region closest to your users
6. Set strong database password

#### Get API Credentials
1. Project Dashboard → Settings → API
2. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **Publishable key (anon)** → `VITE_SUPABASE_PUBLISHABLE_KEY`
   - **Service role key** → Keep secure (server-side only)

### Database Schema

#### Contact Submissions Table

```sql
CREATE TABLE contact_submissions (
  -- Primary key
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  
  -- User information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Message content
  subject TEXT,
  message TEXT NOT NULL,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  
  -- Status tracking
  status TEXT DEFAULT 'new', -- new, read, responded, closed
  is_read BOOLEAN DEFAULT false
);

-- Indexes for performance
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_status ON contact_submissions(status);
```

#### Enable Row Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (form submissions)
CREATE POLICY "Allow public insert"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to view
CREATE POLICY "Allow authenticated select"
  ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated update"
  ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
```

### Querying Data

#### From Contact Form Component

```typescript
import { supabase } from '@/integrations/supabase/client';

// Submit contact form
const { data, error } = await supabase
  .from('contact_submissions')
  .insert({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    phone: '+15026484862',
    message: 'I would like more information about your services.',
  })
  .select();

if (error) {
  console.error('Submission error:', error);
} else {
  console.log('Submitted:', data);
}
```

#### Access Submissions (Admin)

1. Supabase Dashboard → Table Editor
2. Select `contact_submissions` table
3. View, filter, and manage submissions
4. Download as CSV if needed

### Database Backups

**Automatic Backups:**
- Daily automatic backups (free tier)
- 7-day retention
- Stored separately from main database

**Manual Backup:**
1. Supabase Dashboard → Backups
2. Click "Create Backup Now"
3. Download as SQL file

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-run on file change)
npm run test:watch

# Run specific test file
npm test -- contact.test.tsx

# Run tests matching pattern
npm test -- --grep "Contact"

# Generate coverage report
npm test -- --coverage
```

### Test Structure

```
src/test/
├── setup.ts              # Test environment setup (mocks, globals)
├── example.test.ts       # Example test template
├── constants.test.ts     # Constants validation
├── contact.test.tsx      # Contact form component tests
└── ...
```

### Writing Tests

#### Example: Component Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact } from '@/components/Contact';

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<Contact />);
    
    // Fill in form
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' }
    });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Assert
    await expect(screen.findByText(/success/i)).toBeInTheDocument();
  });

  it('shows validation error for invalid email', async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' }
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await expect(screen.findByText(/invalid email/i)).toBeInTheDocument();
  });
});
```

#### Example: Unit Test

```typescript
import { describe, it, expect } from 'vitest';
import { validateEmail, formatPhoneNumber } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('validateEmail', () => {
    it('returns true for valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('returns false for invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });

  describe('formatPhoneNumber', () => {
    it('formats US phone number', () => {
      expect(formatPhoneNumber('5025551234'))
        .toBe('(502) 555-1234');
    });
  });
});
```

### Test Coverage

Target coverage metrics:
- **Statements:** 80%+
- **Branches:** 75%+
- **Functions:** 80%+
- **Lines:** 80%+

View coverage report:
```bash
npm test -- --coverage
# Opens coverage/index.html
```

---

## 🚀 Performance Optimization

### Frontend Performance

#### Code Splitting
- ✅ Automatic route-based splitting with React Router
- ✅ Components lazy-loaded on demand
- ✅ Separate chunks for vendor dependencies

#### Image Optimization
- ✅ WebP format conversion
- ✅ Responsive sizing (srcset)
- ✅ Lazy loading with intersection observer

```typescript
import { useEffect, useRef, useState } from 'react';

export const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(imageRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imageRef);
    return () => observer.disconnect();
  }, [imageRef, src]);

  return <img ref={setImageRef} src={imageSrc} alt={alt} />;
};
```

#### Bundle Analysis
```bash
npm install --save-dev vite-bundle-visualizer

# Then check dist bundle size
npm run build
npx vite-bundle-visualizer
```

### Runtime Performance

#### React Optimization
- ✅ Use `React.memo()` for expensive components
- ✅ Use `useCallback()` for event handlers
- ✅ Use `useMemo()` for expensive computations

```typescript
import { useCallback, useMemo } from 'react';

export const OptimizedComponent = ({ items }) => {
  // Memoize expensive calculation
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );

  // Memoize callback
  const handleClick = useCallback((item) => {
    console.log(item);
  }, []);

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
```

#### Form Optimization
- ✅ React Hook Form minimizes re-renders
- ✅ Only validate changed fields
- ✅ Debounce async validation

```typescript
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash-es';

export const OptimizedForm = () => {
  const { register, watch } = useForm();
  
  const validateEmail = debounce(async (email) => {
    // Async validation (e.g., check if email exists)
  }, 500);

  watch(({ email }) => validateEmail(email));

  return (
    <form>
      <input {...register('email')} />
    </form>
  );
};
```

### Database Query Optimization

```typescript
// Good: Fetch only needed fields
const { data } = await supabase
  .from('contact_submissions')
  .select('id, first_name, email, created_at')
  .limit(10);

// Bad: Fetch all data (unnecessary overhead)
const { data } = await supabase
  .from('contact_submissions')
  .select('*')
  .limit(10);
```

### Monitoring Performance

#### Web Vitals

Track Core Web Vitals:
```typescript
// src/main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

#### Vercel Analytics

1. Enable in Vercel Dashboard → Settings → Analytics
2. View real-user metrics
3. Identify performance bottlenecks

**Key Metrics to Track:**
- **FCP** (First Contentful Paint) - < 1.8s
- **LCP** (Largest Contentful Paint) - < 2.5s
- **CLS** (Cumulative Layout Shift) - < 0.1
- **TTFB** (Time to First Byte) - < 600ms

---

## 🔒 Security Best Practices

### Environment Variables

Never commit sensitive data:

```bash
# .gitignore
.env
.env.local
.env.*.local
.DS_Store
node_modules/
```

### API Security

#### Supabase Row Level Security (RLS)

```sql
-- Only allow authenticated users to view submissions
CREATE POLICY "Authenticated users can view"
ON contact_submissions
FOR SELECT
USING (auth.role() = 'authenticated');

-- Only allow inserts from anyone (for contact form)
CREATE POLICY "Anyone can submit"
ON contact_submissions
FOR INSERT
WITH CHECK (true);
```

#### Rate Limiting (Vercel)

```json
{
  "functions": {
    "api/**": {
      "maxDuration": 10,
      "memory": 1024
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Form Security

#### Input Validation

Always validate on both client and server:

```typescript
import { z } from 'zod';

// Client-side validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Server-side (always re-validate)
const parsedData = contactFormSchema.parse(formData);
```

#### CSRF Protection

Handled automatically by Supabase. No additional configuration needed.

### Content Security Policy (CSP)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

### HTTPS and SSL

✅ Automatically enabled on Vercel
✅ Free SSL/TLS certificates
✅ Auto-renewal
✅ HSTS headers included

### Regular Security Updates

```bash
# Check for security vulnerabilities
npm audit

# Fix security issues automatically
npm audit fix

# Update dependencies safely
npm update

# Update major versions (requires testing)
npx npm-check-updates -u
npm install
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue: "Module not found" error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or with bun
bun install
```

#### Issue: Port 5173 already in use
```bash
# Use different port
npm run dev -- --port 3000

# Or kill process using port
lsof -i :5173
kill -9 <PID>
```

#### Issue: Supabase connection error
```bash
# Verify .env.local has correct credentials
cat .env.local

# Check Supabase project is active
# Visit https://app.supabase.com

# Test connection
curl https://your-project.supabase.co/rest/v1/contact_submissions \
  -H "Authorization: Bearer your-key"
```

#### Issue: Build fails
```bash
# Clear build cache
rm -rf dist/ node_modules/.vite

# Try building again
npm run build

# Check for errors
npm run lint
```

#### Issue: TypeScript errors
```bash
# Generate type definitions
npm run build

# Or manually
npx tsc --noEmit

# Check tsconfig.json is valid
cat tsconfig.json | jq .
```

#### Issue: Form submission not working
```
Checklist:
1. [ ] Supabase URL and key correct in .env.local
2. [ ] contact_submissions table created
3. [ ] Row Level Security (RLS) enabled
4. [ ] Insert policy created
5. [ ] Form component properly wired
6. [ ] Check browser console for errors
```

#### Issue: Images not loading
```
Checklist:
1. [ ] Files exist in public/ directory
2. [ ] Import paths correct in components
3. [ ] Image formats supported (PNG, JPG, WebP, GIF)
4. [ ] File permissions correct (644)
5. [ ] Check network tab in DevTools
```

#### Issue: Vercel deployment fails
```bash
# Check build logs in Vercel Dashboard
# Common causes:
1. Missing environment variables
2. Node version mismatch
3. Build command timeout
4. Port conflicts (use port 3000+)

# Test production build locally
npm run build
npm run preview
```

### Getting Help

1. **Check Logs:**
   - Browser console: Press F12
   - Vite server: Terminal output
   - Vercel: Dashboard → Deployments → Build Logs

2. **Search Documentation:**
   - [Vite Docs](https://vitejs.dev)
   - [React Docs](https://react.dev)
   - [Supabase Docs](https://supabase.com/docs)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)

3. **Debug in Browser:**
   - F12 → Console for errors
   - F12 → Network for failed requests
   - F12 → Application for stored data

4. **Ask for Help:**
   - GitHub Issues on repository
   - Vercel Support: https://vercel.com/support
   - Supabase Discord: https://discord.supabase.com

---

## 🤝 Contributing

### Code Contribution Guidelines

1. **Fork the repository** on GitHub
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes** with clear commits
   ```bash
   git commit -m 'feat: add amazing feature'
   git commit -m 'fix: resolve issue with forms'
   git commit -m 'docs: update README'
   ```

4. **Push to your fork:**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Create a Pull Request** with:
   - Clear description of changes
   - Link to related issues
   - Screenshots if UI changes
   - Tests for new features

### Commit Message Format

Follow conventional commits:
```
feat: add new feature
fix: fix bug in component
docs: update documentation
style: format code
refactor: restructure code
test: add unit tests
chore: update dependencies
```

### Code Review Process

1. PR submitted and assigned to reviewer
2. Automated tests run (CI/CD)
3. Code review feedback (48 hours)
4. Address requested changes
5. Re-review and approval
6. Merge to main branch
7. Auto-deploy to production

---

## 📞 Support

### Contact Information

- **Email:** kdkinteh@yahoo.com
- **Phone:** +1.502.648.4862
- **Address:** 6400 Linstead Road, Louisville, KY 40228, USA
- **Website:** https://kairaoasiscare.com

### Documentation

- [FORMS_GUIDE.md](./FORMS_GUIDE.md) - Complete forms documentation
- [QUICK_START.md](./QUICK_START.md) - Quick start guide
- [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) - Development improvements

### External Resources

- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind CSS:** https://tailwindcss.com
- **Supabase:** https://supabase.com
- **Vercel:** https://vercel.com
- **shadcn/ui:** https://ui.shadcn.com

---

## 📄 License

This project is **proprietary and confidential**. All rights reserved to **Kaira Oasis Care LLC**.

Unauthorized copying, distribution, or modification of this software is strictly prohibited.

---

## 🙏 Acknowledgments

This project is built with modern web technologies:

- **[React 18](https://react.dev)** - UI library with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org)** - Static type checking
- **[Vite](https://vitejs.dev)** - Next-generation build tool
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - High-quality React components
- **[Supabase](https://supabase.com)** - PostgreSQL and authentication
- **[Vercel](https://vercel.com)** - Serverless hosting and deployment
- **[React Router](https://reactrouter.com)** - Client-side routing
- **[React Hook Form](https://react-hook-form.com)** - Form state management
- **[Zod](https://zod.dev)** - TypeScript schema validation
- **[TanStack Query](https://tanstack.com/query)** - Server state management

---

## 📝 Version History

### v1.0.0 - January 22, 2026
- ✅ Initial production release
- ✅ Complete brand rebrand to Kaira Oasis Care
- ✅ 12 professional downloadable forms
- ✅ 6+ blog articles with full detail pages
- ✅ Comprehensive resources section
- ✅ Full-featured contact form with Supabase integration
- ✅ Deployed on Vercel with automatic deployments
- ✅ Optimized performance (Lighthouse 95+)
- ✅ WCAG 2.1 AA accessibility compliance

### Previous Version
- **Grace Hospice Care** - Initial platform (archived)

---

<div align="center">

## **Kaira Oasis Care LLC**

### *Nature's Embrace - Compassionate End-of-Life Care*

[🌐 Website](https://kairaoasiscare.com) • [📧 Email](mailto:kdkinteh@yahoo.com) • [📞 Phone](tel:+15026484862)

---

**Proudly deployed on [Vercel](https://vercel.com)**

<a href="https://vercel.com/?utm_source=kaira-oasis-care&utm_campaign=oss">
  <img alt="Powered by Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" width="175" />
</a>

---

This project is **proprietary and confidential**. All rights reserved to Kaira Oasis Care LLC.

</div>
