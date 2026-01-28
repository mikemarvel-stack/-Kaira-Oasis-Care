import { Helmet } from 'react-helmet-async';
import { ORGANIZATION, CONTACT } from '@/lib/constants';

export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": ORGANIZATION.name,
    "description": ORGANIZATION.description,
    "url": "https://kairaoasiscare.com",
    "logo": "https://kairaoasiscare.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phone,
      "contactType": "customer service",
      "email": CONTACT.email,
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT.address,
      "addressLocality": CONTACT.city,
      "addressRegion": CONTACT.state,
      "postalCode": CONTACT.zipCode,
      "addressCountry": CONTACT.country
    },
    "sameAs": [
      "https://facebook.com/kairaoasiscare",
      "https://linkedin.com/company/kairaoasiscare"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};