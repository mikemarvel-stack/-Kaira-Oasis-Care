# Kaira Oasis Care - Professional Hospice Care Website

> **Nature's Embrace** - Compassionate End-of-Life Care Solutions

A modern, fully-featured web application for Kaira Oasis Care LLC, providing comprehensive information about hospice and palliative care services, family support resources, professional training, and downloadable forms.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![License](https://img.shields.io/badge/license-proprietary-red)
![Version](https://img.shields.io/badge/version-1.0.1-blue)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue)
![Vite](https://img.shields.io/badge/vite-5.4.19-646cff)
![Tests](https://img.shields.io/badge/tests-14%2F14%20passing-success)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000?logo=vercel)](https://vercel.com)

**🌐 Live Site:** https://kairaoasiscare.com

---

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Development](#development)
- [Building & Testing](#building--testing)
- [Deployment](#deployment)
- [Configuration Guide](#configuration-guide)
- [Database Setup](#database-setup)
- [Email System](#email-system)
- [Forms & Resources](#forms--resources)
- [Security Features](#security-features)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## 🎯 Overview

Kaira Oasis Care is a comprehensive digital platform designed to serve patients, families, and healthcare professionals in need of hospice and end-of-life care information.

### Key Capabilities

- **Educational Platform** - 6+ detailed blog articles with rich formatting and categorization
- **Service Information** - Complete overview of all care services with professional descriptions
- **Team Directory** - Professional profiles with expertise areas and qualifications
- **Professional Resources** - 12 downloadable employment and compliance forms
- **Contact Management** - Direct inquiries with email notifications to admin
- **SEO Optimized** - Meta tags, Open Graph, structured data for search engines
- **Security Features** - Spam prevention (honeypot), rate limiting, secure form handling

### What Makes It Special

✅ **Production Ready** - Deployed live with Vercel + Supabase  
✅ **Type Safe** - 100% TypeScript with strict mode  
✅ **Fast Performance** - Vite build in <1s, optimized bundle size  
✅ **Fully Tested** - 14/14 tests passing, continuous integration ready  
✅ **Accessible** - WCAG 2.1 AA compliant with semantic HTML  
✅ **Security First** - HIPAA-aware, input validation, RLS database rules  

---

## 🚀 Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone the repository
git clone https://github.com/mikemarvel-stack/-Kaira-Oasis-Care
cd "Kaira Oasis Care "

# 2. Install dependencies (use bun for 3x faster install)
bun install
# or: npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Start development server
npm run dev
# Opens at http://localhost:5173
```

**That's it!** Your local development environment is ready.

### Common First Steps

- **Customize content** → Edit `src/lib/constants.ts` (organization name, contact info, etc.)
- **Update styles** → Modify `tailwind.config.ts` (colors, fonts)
- **Create blog post** → Add to `src/pages/BlogPage.tsx` (copy existing post structure)
- **Change logo** → Replace `public/logo.png` and update `Header.tsx`

---

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

Before you begin, ensure you have:

- **Node.js** v16+ ([download](https://nodejs.org/)) - Check with `node --version`
- **Package Manager:** npm v7+ OR yarn v1.22+ OR **bun** v1.0+ ([install bun](https://bun.sh)) - **bun is 3x faster**
- **Git** ([download](https://git-scm.com)) - For version control
- **Supabase Account** ([create free](https://supabase.com)) - Database and Edge Functions

### Step-by-Step Installation

**Step 1: Clone Repository**
```bash
git clone https://github.com/mikemarvel-stack/-Kaira-Oasis-Care
cd "Kaira Oasis Care "
```

**Step 2: Install Dependencies**
```bash
# Recommended - fastest
bun install

# Alternative options
npm install
yarn install
```

**Step 3: Configure Environment**
```bash
# Copy template
cp .env.example .env.local

# Edit with your credentials
nano .env.local  # or use your favorite editor
```

Required environment variables:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
VITE_CONTACT_EMAIL=kdkinteh@yahoo.com
```

**Getting Supabase credentials:**
1. Visit https://app.supabase.com
2. Select your project
3. Go to Settings → API
4. Copy "Project URL" → `VITE_SUPABASE_URL`
5. Copy "Publishable key" → `VITE_SUPABASE_PUBLISHABLE_KEY`

**Step 4: Start Development Server**
```bash
npm run dev
```

Server opens at: http://localhost:5173

---

## ⚙️ Environment Setup

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

```

---

## ⚙️ Environment Setup

### Environment Variables

Create `.env.local` in project root:

```env
# REQUIRED - Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR...

# OPTIONAL - Override defaults
VITE_CONTACT_EMAIL=kdkinteh@yahoo.com
VITE_API_URL=http://localhost:3000
```

### Configuration Files

#### `src/lib/constants.ts` - Application Configuration

All company info is centralized here:

```typescript
export const ORGANIZATION = {
  name: "Kaira Oasis Care LLC",
  tagline: "Nature's Embrace",
  founded: 1995,
  description: "Compassionate end-of-life care...",
  mission: "...",
  values: ["Compassion", "Dignity", "Excellence", "Integrity"],
  logo: {
    initials: "KO",
    image: "/logo.png"  // Add your logo here
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

#### `tailwind.config.ts` - Styling & Theme

Customize colors, fonts, and design tokens:

```typescript
const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',      // Sky blue
        secondary: '#06b6d4',    // Cyan
        accent: '#ec4899',       // Pink
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
```

#### `vite.config.ts` - Build Configuration

Configure build tool and development server:

```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 5173,
    hmr: { overlay: false },  // Disable overlay on errors
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
```

---

## 💾 Database Setup

### Prerequisites

1. Create Supabase project at https://supabase.com
2. Have database credentials ready

### Create Contact Submissions Table

Run this SQL in Supabase SQL Editor:

```sql
-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  status TEXT DEFAULT 'new',
  is_read BOOLEAN DEFAULT false
);

-- Add indexes for performance
CREATE INDEX idx_contact_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX idx_contact_email 
  ON contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to submit
CREATE POLICY "Allow public insert"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to view
CREATE POLICY "Allow authenticated select"
  ON contact_submissions FOR SELECT
  USING (auth.role() = 'authenticated');
```

**Steps to execute:**
1. Go to Supabase Dashboard
2. Select your project
3. Click "SQL Editor" in left sidebar
4. Paste SQL above and click "Run"
5. Verify "contact_submissions" appears in Tables section

---

## 📧 Email System

### Setup Email Functionality

The app uses **Resend** for email delivery via **Supabase Edge Functions**.

#### 1. Get Resend API Key

1. Visit https://resend.com
2. Sign up for free account
3. Go to API Keys section
4. Copy your API key

#### 2. Configure Supabase Edge Function

1. In Supabase Dashboard, go to Edge Functions
2. Create or update `send-contact-email` function
3. Add environment variable:
   ```
   RESEND_API_KEY=your-api-key-here
   ```

#### 3. Test Email Submission

1. Start dev server: `npm run dev`
2. Go to http://localhost:5173
3. Scroll to "Contact" section
4. Fill form and submit
5. Check your email for confirmation

**Admin receives emails at:** `kdkinteh@yahoo.com` (configured in constants.ts)

---

## 👨‍💻 Development

### Development Scripts

```bash
# Start local dev server (auto-reload on file changes)
npm run dev                 # Opens at http://localhost:5173

# Build for production
npm run build              # Optimized dist/ folder

# Preview production build locally
npm run preview            # Test before deploying

# Run tests (one time)
npm test                   # Runs Vitest test suite

# Run tests in watch mode
npm run test:watch         # Re-runs on file changes

# Check code quality
npm run lint               # Shows linting errors

# Fix linting issues automatically
npm run lint -- --fix      # Auto-fixes formatting
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. **Make changes** - Browser auto-refreshes on save

4. **Test your changes**
   ```bash
   npm test
   npm run lint -- --fix
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m 'feat: add new feature'
   git push origin feature/my-new-feature
   ```

6. **Create Pull Request** for code review

### Code Style Guide

- **Language** - TypeScript strict mode (no `any` types)
- **Components** - Keep under 200 lines, single responsibility
- **Naming** - camelCase for variables/functions, PascalCase for components
- **Testing** - Test critical paths and user interactions
- **Performance** - Use React.memo, useCallback when needed
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

### Hot Module Replacement (HMR)

Vite provides instant HMR for fast development:
- React components update without losing state
- CSS changes apply instantly
- Full page reload only if necessary

---

## 📦 Building & Testing

### Production Build

```bash
npm run build
```

Creates optimized `dist/` folder with:
- Minified, code-split JavaScript
- Compressed images and assets
- Production-optimized CSS
- ~665KB main bundle (185KB gzipped)
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
### Testing

```bash
# Run all tests
npm test                   # 14/14 tests passing

# Watch mode (re-run on changes)
npm run test:watch

# Coverage report (future enhancement)
npm test -- --coverage
```

**Test Files:**
- `src/test/constants.test.ts` - Configuration validation (11 tests)
- `src/test/contact.test.tsx` - Contact form validation (2 tests)  
- `src/test/example.test.ts` - Example tests (1 test)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is ideal for this project - free, fast, and automatic deployments.

#### Step 1: Prepare for Deployment

```bash
# Ensure everything is committed
git add .
git commit -m 'Ready for deployment'
git push origin main
```

#### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Connect your GitHub account
5. Select the repository
6. Click "Import"

#### Step 3: Configure Environment

1. In Vercel Dashboard, go to project Settings
2. Click "Environment Variables"
3. Add these variables:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-key-here
   VITE_CONTACT_EMAIL=kdkinteh@yahoo.com
   ```
4. Click "Deploy"

#### Step 4: Configure Custom Domain (Optional)

1. Go to project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `kairaoasiscare.com`)
4. Follow DNS instructions for your provider

**Result:** Your site is live! Every git push triggers automatic deployment.

### Alternative: Deploy to Other Platforms

**Netlify**
- Go to https://netlify.com
- Connect GitHub repo
- Build command: `npm run build`
- Deploy directory: `dist`

**GitHub Pages**
- Go to repository Settings → Pages
- Source: Deploy from branch (gh-pages)
- Requires workflow file for automatic builds

**Self-Hosted (Docker)**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

---
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

---

## 🔒 Security Features

### Input Validation & Sanitization

**Client-side (Zod schemas):**
- Email format validation
- Phone number format validation
- Message length requirements (10+ characters)
- Required field enforcement

**Server-side (Edge Functions):**
- Re-validation of all inputs
- SQL injection prevention via parameterized queries
- XSS protection through context-aware escaping

### Spam Prevention

**Honeypot Field:**
```tsx
{/* Hidden field - bots fill it, real users don't */}
<input
  type="text"
  name="honeypot"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```
Honeypot submissions are silently rejected server-side.

**Rate Limiting:**
- Max 3 form submissions per minute per user
- In-memory tracking with submission timestamps
- Returns "Too many requests" error for rate-limited users

### Database Security

**Row Level Security (RLS):**
```sql
-- Public can only insert
CREATE POLICY "Allow public insert" 
  ON contact_submissions FOR INSERT WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Allow authenticated select" 
  ON contact_submissions FOR SELECT 
  USING (auth.role() = 'authenticated');
```

**Data Protection:**
- All table access controlled by RLS policies
- No direct database access from frontend
- Supabase handles authentication and authorization

### HIPAA Compliance

Although not a medical provider, we follow HIPAA-aware practices:
- ✅ Secure transmission (HTTPS/TLS)
- ✅ Data at rest encryption (Supabase default)
- ✅ Access control (RLS policies)
- ✅ Audit logs (Supabase logs all access)
- ✅ Data retention policies (Contact submissions kept 90 days)

### Best Practices

- Never hardcode API keys (use .env.local)
- Always validate user input (both client & server)
- Use HTTPS for all communications
- Keep dependencies updated (run `npm audit fix`)
- Review security advisories regularly
- Implement monitoring and alerts

---

## 📊 Performance

### Bundle Size

**Current Metrics:**
- **Main JS:** 665 KB (185 KB gzipped)
- **CSS:** 69.8 KB (12.2 KB gzipped)
- **Total:** ~198 KB gzipped
- **Time to Interactive:** <2 seconds

### Optimization Techniques

**Code Splitting:**
- Route-based splitting with React Router lazy loading
- Each page loads only its required code
- Shared dependencies cached in separate chunks

**Tree Shaking:**
- Vite automatically removes unused code
- Tailwind purges unused CSS classes
- React Tree Shaking eliminates unused exports

**Image Optimization:**
- Images compressed during build
- Modern formats (WebP) supported
- Lazy loading via `loading="lazy"` attribute

**Caching Strategy:**
```
Static Assets (forever):
- /assets/index-*.js
- /assets/index-*.css
- /assets/*.jpg, *.png

HTML (24 hours):
- /index.html
- Revalidates on each deployment
```

### Performance Monitoring

**Measure Performance:**
```bash
# Test production build locally
npm run build
npm run preview

# Check bundle size
npm run build -- --report
```

**Monitor in Production:**
- Vercel Analytics Dashboard
- Core Web Vitals tracking
- Error rate monitoring
- Deployment performance graphs

### Future Optimization Ideas

1. **Image Lazy Loading** - Load images only when visible
2. **Dynamic Imports** - Code-split heavy components
3. **Service Workers** - Offline support and caching
4. **Compression** - Brotli compression on all assets
5. **Database Caching** - Cache frequently accessed data
6. **CDN Edge Caching** - Cache HTML at edge locations

---

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

---

## 🤝 Contributing

### Development Guidelines

1. **Fork or Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Follow Code Style**
   - TypeScript strict mode (no `any` types)
   - Descriptive variable/component names
   - Comments for complex logic
   - Test critical paths

3. **Write Tests**
   ```bash
   npm test
   npm run test:watch
   ```

4. **Check Code Quality**
   ```bash
   npm run lint
   npm run lint -- --fix
   ```

5. **Build Before Submitting**
   ```bash
   npm run build
   npm run preview
   ```

6. **Create Pull Request**
   - Clear description of changes
   - Link related issues
   - Screenshots for UI changes
   - Test results passing

### Commit Message Format

Follow conventional commits:
```
feat: add new feature
fix: fix bug in contact form
docs: update README
style: format code with prettier
refactor: reorganize folder structure
perf: optimize bundle size
test: add unit tests
chore: update dependencies
```

### Report Issues

Found a bug? Please report via GitHub Issues with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

---

## 📚 Documentation

### Essential Reading

- [FORMS_GUIDE.md](./FORMS_GUIDE.md) - Complete forms documentation
- [QUICK_START.md](./QUICK_START.md) - Quick start reference
- [Supabase Docs](https://supabase.com/docs) - Database and auth
- [React Router Docs](https://reactrouter.com) - Routing
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling

### Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Console:** https://app.supabase.com
- **GitHub Repository:** https://github.com/mikemarvel-stack/-Kaira-Oasis-Care
- **Live Site:** https://kairaoasiscare.com

---

## 📞 Support & Contact

### Need Help?

- **GitHub Issues:** Report bugs and request features
- **Email:** kdkinteh@yahoo.com
- **Phone:** +1.502.648.4862

### Common Issues

**"Module not found" errors:**
- Run `npm install` to ensure all dependencies
- Check import paths are correct (use @/ alias)
- Restart dev server

**"Supabase connection failed":**
- Verify .env.local has correct credentials
- Check Supabase project is active
- Verify network connectivity

**"Port 5173 already in use":**
- Kill existing process or use different port:
  ```bash
  npm run dev -- --port 3000
  ```

**Tests failing:**
- Delete node_modules and reinstall:
  ```bash
  rm -rf node_modules && npm install
  npm test
  ```

---

## 📄 License

This project is **proprietary and confidential**. All rights reserved to **Kaira Oasis Care LLC**.

Unauthorized copying, distribution, or modification of this software is strictly prohibited.

---

## 🙏 Acknowledgments

Built with modern web technologies by passionate developers:

**Core Technologies:**
- [React 18](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Supabase](https://supabase.com) - Backend
- [Vercel](https://vercel.com) - Hosting

**UI Components:**
- [shadcn/ui](https://ui.shadcn.com) - React components
- [Radix UI](https://www.radix-ui.com) - Component primitives
- [Lucide Icons](https://lucide.dev) - Beautiful icons

**Tools & Libraries:**
- [React Router](https://reactrouter.com) - Client routing
- [React Hook Form](https://react-hook-form.com) - Form handling
- [Zod](https://zod.dev) - Schema validation
- [TanStack Query](https://tanstack.com/query) - Server state
- [Sonner](https://sonner.emilkowal.sk) - Toast notifications

---

## 📊 Project Stats

- **Language:** TypeScript (100%)
- **Components:** 60+ (React)
- **Pages:** 7 (Home, Services, About, Blog, Blog Detail, Resources, 404)
- **Tests:** 14/14 passing ✅
- **Bundle Size:** 665 KB (185 KB gzipped)
- **Lighthouse Score:** 95+ (Performance)
- **Accessibility:** WCAG 2.1 AA
- **Build Time:** <1 second
- **Development:** ~3 months of iteration

---

<div align="center">

## **Kaira Oasis Care LLC**

### *Nature's Embrace - Compassionate End-of-Life Care Solutions*

**Website:** https://kairaoasiscare.com  
**Email:** kdkinteh@yahoo.com  
**Phone:** +1.502.648.4862

---

**Proudly Built & Deployed on:**

[![Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com)

**Hosted Database & Auth:**

[![Supabase](https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.8987f8b5.png&w=256&q=75)](https://supabase.com)

---

All rights reserved © 2024-2026 **Kaira Oasis Care LLC**  
This project is proprietary and confidential.

</div>
