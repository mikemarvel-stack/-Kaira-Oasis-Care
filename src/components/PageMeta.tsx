import { Helmet } from 'react-helmet-async';
import { getPageMeta, getStructuredData } from '@/lib/seo';

interface PageMetaProps {
  page: 'home' | 'services' | 'about' | 'blog' | 'resources';
  title?: string;
  description?: string;
}

export const PageMeta = ({ page, title, description }: PageMetaProps) => {
  const meta = getPageMeta(page);
  const structuredData = getStructuredData(page);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title || meta.title}</title>
      <meta name="description" content={description || meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />

      {/* Open Graph Meta Tags (Social Media) */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={title || meta.title} />
      <meta property="og:description" content={description || meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:locale" content={meta.locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || meta.title} />
      <meta name="twitter:description" content={description || meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={meta.canonical} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default PageMeta;
