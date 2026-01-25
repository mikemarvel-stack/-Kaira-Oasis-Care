/**
 * Helmet meta tags configuration for SEO
 * Provides page titles, descriptions, and social meta tags
 */

export const getPageMeta = (page: 'home' | 'services' | 'about' | 'blog' | 'resources') => {
  const baseUrl = 'https://kairaoasiscare.com';
  const baseDescription = 'Compassionate hospice and palliative care services in Louisville, KY. 25+ years of providing dignity and comfort care.';

  const pages = {
    home: {
      title: 'Kaira Oasis Care - Compassionate Hospice Care in Louisville',
      description: baseDescription,
      path: '/',
      image: `${baseUrl}/logo.png`,
    },
    services: {
      title: 'Hospice & Palliative Care Services | Kaira Oasis Care',
      description: 'Comprehensive hospice care services including pain management, family support, spiritual care, and bereavement services.',
      path: '/services',
      image: `${baseUrl}/logo.png`,
    },
    about: {
      title: 'About Kaira Oasis Care - Our Mission & Team',
      description: 'Learn about our 25+ years of compassionate hospice care, our team, and our commitment to dignity and comfort.',
      path: '/about',
      image: `${baseUrl}/logo.png`,
    },
    blog: {
      title: 'Hospice Care Resources & Articles | Kaira Oasis Care Blog',
      description: 'Educational articles, guides, and resources about hospice care, family support, and end-of-life planning.',
      path: '/blog',
      image: `${baseUrl}/logo.png`,
    },
    resources: {
      title: 'Resources & Forms | Kaira Oasis Care',
      description: 'Download forms, guides, and resources to help you navigate hospice care and family support.',
      path: '/resources',
      image: `${baseUrl}/logo.png`,
    },
  };

  return {
    ...pages[page],
    canonical: `${baseUrl}${pages[page].path}`,
    type: 'website',
    locale: 'en_US',
  };
};

export const getStructuredData = (page: 'home' | 'services' | 'about' | 'blog' | 'resources') => {
  const baseUrl = 'https://kairaoasiscare.com';
  const meta = getPageMeta(page);

  return {
    '@context': 'https://schema.org',
    '@type': page === 'blog' ? 'BlogPosting' : 'LocalBusiness',
    name: 'Kaira Oasis Care LLC',
    description: meta.description,
    url: `${baseUrl}${meta.path}`,
    logo: `${baseUrl}/logo.png`,
    image: meta.image,
    sameAs: [
      'https://facebook.com/kairaoasiscare',
      'https://linkedin.com/company/kairaoasiscare',
      'https://twitter.com/kairaoasiscare',
    ],
    ...(page !== 'blog' && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6400 Linstead Road',
        addressLocality: 'Louisville',
        addressRegion: 'KY',
        postalCode: '40228',
        addressCountry: 'US',
      },
      telephone: '+1.502.648.4862',
      email: 'kdkinteh@yahoo.com',
      openingHours: 'Mo-Fr 08:00-18:00',
    }),
  };
};
