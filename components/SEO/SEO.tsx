import * as React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }: SEOProps) => {
  const defaultTitle = 'Backpackuy - Gateway to Indonesia Tour';
  const templateTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const defaultDescription = 'Backpackuy Descrption';
  const templateDescription = description
    ? `${description} | ${defaultDescription}`
    : defaultDescription;

  return (
    <Head>
      <title>{templateTitle}</title>
      <meta
        name='description'
        content={templateDescription}
        key='description'
      />
      <meta property='og:title' content={templateTitle} key='title' />
      <meta
        property='og:description'
        content={templateDescription}
        key='og:description'
      />
      <meta property='twitter:title' content={templateTitle} />
      <meta property='twitter:description' content={templateDescription} />
    </Head>
  );
};

export default SEO;
