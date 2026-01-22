# Kaira Oasis Care - Professional Hospice Care Website

> **Nature's Embrace** - Compassionate End-of-Life Care Solutions

A modern, fully-featured web application for Kaira Oasis Care LLC, providing comprehensive information about hospice and palliative care services, family support resources, professional training, and downloadable forms.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![License](https://img.shields.io/badge/license-proprietary-red)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Forms & Resources](#forms--resources)
- [Blog & Content](#blog--content)
- [Database](#database)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## 🎯 Overview

Kaira Oasis Care is a comprehensive digital platform designed to serve patients, families, and healthcare professionals in need of hospice and end-of-life care information. The website provides:

- **Educational Content** - Detailed articles and guides about hospice care
- **Service Information** - Complete overview of care services offered
- **Team Profiles** - Meet our compassionate healthcare professionals
- **Professional Resources** - Downloadable employment and compliance forms
- **Grief Support** - Resources for families dealing with loss
- **Contact & Inquiry System** - Direct communication with our team

---

## ✨ Key Features

### 🏥 Healthcare Information
- **Comprehensive Services** - Detailed descriptions of all care services
- **Team Directory** - Professional profiles with expertise areas
- **FAQ Section** - Common questions about hospice care
- **Educational Blog** - 6+ detailed articles about end-of-life care

### 📱 User Experience
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Accessibility** - WCAG compliant with semantic HTML
- **Fast Performance** - Optimized with Vite and code splitting
- **Smooth Navigation** - Intuitive menu and internal linking

### 📋 Forms & Resources
- **Employment Forms** - Application, questionnaire, verification
- **Compliance Documents** - Background checks, drug testing, confidentiality
- **HR Resources** - Grievance forms, payroll authorization
- **Professional Development** - College of Direct Support training
- **Care Guides** - Downloadable family resources

### 📰 Content Management
- **Blog System** - Full-featured blog with categories and detailed articles
- **Article Detail Pages** - Complete article viewing with related content
- **Resource Library** - External links and comprehensive guides
- **Search Ready** - Blog posts organized and easily discoverable

### 🔐 Security & Compliance
- **HIPAA Compliance** - Protected health information handling
- **Data Validation** - Client and server-side form validation
- **Secure Forms** - Encrypted submission handling
- **Confidentiality** - Proper data protection measures

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

### State Management & Forms
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation
- **TanStack Query** - Server state management

### Backend & Services
- **Supabase** - PostgreSQL database and authentication
- **Node.js APIs** - Serverless functions (if needed)

### Testing & Quality
- **Vitest** - Fast unit testing framework
- **ESLint** - Code quality and standards
- **TypeScript** - Static type checking

### Build & Deployment
- **npm/bun** - Package management
- **Vite** - Production optimization
- **Docker** - Containerization ready

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** v16 or higher ([install here](https://nodejs.org/))
- **npm** v7+ or **yarn** v1.22+ (or **bun** v1.0+)
- **Git** for version control
- **Supabase Account** ([create free account](https://supabase.io))

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/your-org/kaira-oasis-care.git
cd kaira-oasis-care
```

#### 2. Install Dependencies
```bash
npm install
# or
bun install
```

#### 3. Configure Environment Variables
Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-public-key

# Optional: API endpoints
VITE_API_URL=http://localhost:3000
```

#### 4. Set Up Supabase Database

Create a `contact_submissions` table in Supabase:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Create index for faster queries
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
```

#### 5. Start Development Server
```bash
npm run dev
```

The application will open automatically at:
- **Local**: http://localhost:5173
- **Network**: Check console output for your local IP

---

## 📁 Project Structure

```
kaira-oasis-care/
├── public/
│   ├── forms/                    # Downloadable form templates
│   │   ├── Employment-Application.txt
│   │   ├── Background-Consent-Form.txt
│   │   ├── Drug-Testing-Consent.txt
│   │   └── ... (9 more forms)
│   ├── robots.txt
│   └── favicon.ico
│
├── src/
│   ├── components/               # Reusable React components
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   └── ... (40+ more)
│   │   ├── About.tsx            # About section component
│   │   ├── BlogPreview.tsx      # Blog preview component
│   │   ├── Contact.tsx          # Contact form with validation
│   │   ├── ErrorBoundary.tsx    # Error handling
│   │   ├── FAQ.tsx              # FAQ accordion
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Services.tsx         # Services showcase
│   │   ├── Team.tsx             # Team profiles
│   │   └── Testimonials.tsx     # Client testimonials
│   │
│   ├── pages/                   # Full page components
│   │   ├── Index.tsx            # Home page
│   │   ├── ServicesPage.tsx     # Services detail page
│   │   ├── AboutPage.tsx        # About page
│   │   ├── BlogPage.tsx         # Blog listing page
│   │   ├── BlogDetailPage.tsx   # Individual blog article
│   │   ├── ResourcesPage.tsx    # Resources & forms
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx       # Mobile detection
│   │   ├── use-toast.ts         # Toast notifications
│   │   └── useContactForm.ts    # Contact form logic
│   │
│   ├── lib/                     # Utility functions & constants
│   │   ├── constants.ts         # App configuration (IMPORTANT)
│   │   └── utils.ts             # Helper functions
│   │
│   ├── integrations/            # External service integrations
│   │   └── supabase/
│   │       ├── client.ts        # Supabase client
│   │       └── types.ts         # Type definitions
│   │
│   ├── test/                    # Test files
│   │   ├── constants.test.ts
│   │   ├── contact.test.tsx
│   │   └── setup.ts
│   │
│   ├── assets/                  # Images and media
│   ├── App.tsx                  # Root component with routing
│   ├── App.css                  # Global styles
│   ├── index.css                # Base styles
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts            # Vite type definitions
│
├── supabase/
│   ├── config.toml              # Supabase configuration
│   └── migrations/              # Database migrations
│
├── .github/                     # GitHub configuration
├── public/                      # Static assets
├── node_modules/                # Dependencies (auto-generated)
│
├── eslint.config.js             # Linting rules
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # App-specific TS config
├── tsconfig.node.json           # Node-specific TS config
├── vite.config.ts               # Vite configuration
├── vitest.config.ts             # Vitest configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── bun.lockb                    # Lock file (bun)
│
├── FORMS_GUIDE.md               # Comprehensive forms documentation
├── QUICK_START.md               # Quick start guide
├── IMPROVEMENTS_SUMMARY.md      # Development improvements log
├── README.md                    # This file
└── .env.example                 # Environment variables template
```

---

## ⚙️ Configuration

### Constants & Organization Info

All company information is centralized in `src/lib/constants.ts`. Update here to change:

```typescript
export const ORGANIZATION = {
  name: "Kaira Oasis Care LLC",
  tagline: "Nature's Embrace",
  founded: 1995,
  description: "...",
  mission: "...",
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

### Tailwind Configuration

Customize colors, fonts, and spacing in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "...",
      secondary: "...",
    },
    fontFamily: {
      display: "Playfair Display",
      body: "Inter",
    },
  },
}
```

---

## 👨‍💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests in watch mode
npm test

# Run tests once
npm run test:watch

# Check for linting errors
npm run lint

# Build with development settings
npm run build:dev
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally
   ```bash
   npm run dev
   ```

3. **Run tests and linting**
   ```bash
   npm test
   npm run lint
   ```

4. **Commit with clear messages**
   ```bash
   git commit -m 'Add: description of changes'
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** for review

### Code Quality Standards

- **TypeScript** - Use strict mode, avoid `any` types
- **Components** - Keep components small and focused
- **Naming** - Use descriptive names for variables and functions
- **Comments** - Document complex logic
- **Testing** - Write tests for new features

---

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel auto-detects Vite configuration
3. Add environment variables in Vercel dashboard
4. Deploy on every push to main

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify UI
5. Auto-deploy on push

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

#### GitHub Pages
1. Update `vite.config.ts` base path
2. Push to `gh-pages` branch
3. Enable GitHub Pages in repository settings

---

## 📋 Forms & Resources

The application includes 12 professional downloadable forms:

### Employment Forms
- Employment Application
- Job Questionnaire
- Employment Verification

### Compliance Forms
- Background Consent Form
- Central Registry Check
- Drug Testing Consent
- Code of Conduct Agreement
- Confidentiality Agreement

### HR & Payroll
- Direct Deposit Authorization
- Grievance Procedure Form
- Professional Reference Request
- College of Direct Support Program

For complete form documentation, see [FORMS_GUIDE.md](./FORMS_GUIDE.md).

---

## 📰 Blog & Content

### Blog Features
- **6+ Comprehensive Articles** - Educational content about hospice care
- **Article Categories** - Education, Care Tips, Family Support, etc.
- **Full-Page Article View** - Dedicated pages for each article
- **Related Articles** - Suggestions for further reading
- **Author & Date Info** - Full metadata for each article

### Articles Included
1. Understanding Hospice Care: A Complete Guide
2. Pain Management in Hospice Care
3. Creating Meaningful Moments
4. Supporting Your Loved One: A Caregiver's Guide
5. The Grief Journey: Understanding Loss and Healing
6. Advance Directives and End-of-Life Planning

### Adding New Blog Posts

Edit `src/pages/BlogPage.tsx` to add posts to the `blogPosts` array:

```typescript
{
  title: "Article Title",
  excerpt: "Short summary",
  author: "Author Name",
  date: "January 22, 2026",
  category: "Education",
  image: articleImage,
  slug: "article-url-slug",
  content: `Full article content with markdown...`,
}
```

---

## 🗄️ Database

### Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.io](https://supabase.io)
   - Create new project
   - Get your URL and API key

2. **Create Tables**
   - Use provided SQL migrations
   - Set up Row Level Security (RLS)

3. **Configure Environment**
   - Add credentials to `.env.local`

### Contact Form Table

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert"
ON contact_submissions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow authenticated select"
ON contact_submissions FOR SELECT
USING (auth.role() = 'authenticated');
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- contact.test.tsx

# Run with coverage
npm test -- --coverage
```

### Test Files
- `src/test/constants.test.ts` - Constants validation
- `src/test/contact.test.tsx` - Contact form tests
- `src/test/example.test.ts` - Example test structure

### Writing Tests

Use Vitest and React Testing Library:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });
});
```

---

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Change port
npm run dev -- --port 3000
```

#### Module Not Found
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Supabase Connection Failed
- Verify `.env.local` credentials
- Check Supabase project is active
- Ensure API keys have correct permissions

#### Build Fails
```bash
# Clear build cache
rm -rf dist/ node_modules/.vite
npm run build
```

#### TypeScript Errors
```bash
# Regenerate type definitions
npm run build
```

---

## 📞 Support

### Contact Information

- **Email:** kdkinteh@yahoo.com
- **Phone:** +1.502.648.4862
- **Address:** 6400 Linstead Road, Louisville, KY 40228, US
- **Website:** https://kairaoasiscare.com

### Resources

- [FORMS_GUIDE.md](./FORMS_GUIDE.md) - Complete forms documentation
- [QUICK_START.md](./QUICK_START.md) - Quick start guide
- [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) - Development log

### Community

- GitHub Issues - Report bugs and request features
- GitHub Discussions - Ask questions and share ideas
- Email - For sensitive matters

---

## 📄 License

This project is **proprietary and confidential**. All rights reserved to Kaira Oasis Care LLC.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Components from [shadcn/ui](https://ui.shadcn.com)
- Database by [Supabase](https://supabase.com)
- Bundled with [Vite](https://vitejs.dev)

---

## 📝 Version History

**v1.0.0** - January 22, 2026
- Initial production release
- Complete brand rebrand to Kaira Oasis Care
- 12 professional downloadable forms
- 6+ blog articles with full detail pages
- Comprehensive resources section
- Full-featured contact form with Supabase

**Previous:** Grace Hospice Care (archived)

---

<div align="center">

**Kaira Oasis Care LLC**

*Nature's Embrace - Compassionate End-of-Life Care*

[Website](https://kairaoasiscare.com) • [Email](mailto:kdkinteh@yahoo.com) • [Phone](tel:+15026484862)

</div>

This project is proprietary and confidential.
