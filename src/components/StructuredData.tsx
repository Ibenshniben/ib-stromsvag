import React from 'react';

interface PersonData {
  name: string;
  jobTitle: string;
  image: string;
  sameAs: string[];
  url: string;
}

export const PersonStructuredData: React.FC<{ person: PersonData }> = ({ person }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    image: person.image,
    sameAs: person.sameAs,
    url: person.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface WebsiteData {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    url: string;
  };
}

export const WebsiteStructuredData: React.FC<{ website: WebsiteData }> = ({ website }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: website.name,
    url: website.url,
    description: website.description,
    author: {
      '@type': 'Person',
      name: website.author.name,
      url: website.author.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};