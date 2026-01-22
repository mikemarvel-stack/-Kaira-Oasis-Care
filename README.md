# kaira Oasis care Website

A modern, compassionate web application for kaira Oasis care providing information about end-of-life care services, family support, and spiritual guidance.

## Project Overview

This website is built with modern web technologies and features:
- Responsive design for all devices
- Contact form with Supabase integration
- Comprehensive service information
- Team profiles and testimonials
- FAQ section with smooth interactions
- Blog and resources sections

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Validation**: Zod
- **Database**: Supabase
- **Testing**: Vitest
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 16+ (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Supabase account and project

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd kaira-oasis-care
```

2. Install dependencies:
```sh
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Update with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
   ```

4. Start the development server:
```sh
npm run dev
```

The app will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase
- `npm test` - Run tests in watch mode
- `npm run test:watch` - Run tests with file watching

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Team.tsx        # Team profiles
│   ├── Testimonials.tsx # Client testimonials
│   ├── FAQ.tsx         # FAQ accordion
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── ...
├── pages/              # Full page components
│   ├── Index.tsx       # Home page
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   ├── BlogPage.tsx
│   ├── ResourcesPage.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
│   ├── useContactForm.ts
│   └── use-toast.ts
├── lib/                # Utility functions
│   ├── constants.ts    # App configuration
│   └── utils.ts
├── integrations/       # External service integrations
│   └── supabase/
├── App.tsx             # Root component
└── main.tsx            # Entry point
```

## Environment Variables

Required environment variables (see `.env.example`):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

## Key Features

### Responsive Design
- Mobile-first approach
- Hamburger menu on small screens
- Optimized for tablets and desktops

### Contact Form
- Client-side validation with Zod
- Server-side submission to Supabase
- Retry logic for network failures
- Toast notifications for user feedback

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors for readability

### Performance
- Lazy loading of components
- Optimized images
- Minified production builds
- Fast development server with Vite

## Database Setup

The contact form requires a `contact_submissions` table in Supabase with columns:
- `id` (UUID, primary key)
- `first_name` (text)
- `last_name` (text)
- `email` (text)
- `phone` (text, nullable)
- `message` (text)
- `created_at` (timestamp)

## Customization

All company information is centralized in `src/lib/constants.ts`:
- Organization details
- Contact information
- Social media links
- Routes and navigation
- Company statistics

## Testing

```sh
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Linting

```sh
# Check for linting errors
npm run lint

# Fix auto-fixable issues
npm run lint --fix
```

## Deployment

### Build for Production
```sh
npm run build
```

The `dist/` folder will contain the production-ready files.

### Hosting Options

The built application can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Support

For support, contact:
- **Email:** kdkinteh@yahoo.com
- **Phone:** +1.502.648.4862
- **Address:** 6400 Linstead Road, Louisville, KY 40228, US

## License

This project is proprietary and confidential.
