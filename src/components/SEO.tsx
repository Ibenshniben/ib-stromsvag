import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ib Strømsvåg - Portfolio',
  description = 'Personal portfolio website for Ib Strømsvåg, a young developer with passion for web development, design and technology',
  keywords = 'web development, frontend, developer, portfolio, Ib Strømsvåg, React, Next.js, JavaScript, TypeScript',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
}) => {
  const router = useRouter();
  const siteUrl = 'https://ibstromsvag.com';
  const fullUrl = canonicalUrl || `${siteUrl}${router.asPath}`;
  const fullTitle = `${title} | Ib Strømsvåg`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Ib Strømsvåg Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
};

export default SEO;