import * as React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }: SEOProps) => {
  const defaultTitle = 'Backpackuy - Gateway to Indonesia Tour';
  const templateTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const defaultDescription =
    'Venture to the beauty of Indonesia with Backpackuy, a web application based travel assistant. It offers an itinerary planner, recommended places all over Indonesia, and estimates travel expenses based on your budget.';
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
      <meta name='og:title' content={templateTitle} key='title' />
      <meta
        name='og:description'
        content={templateDescription}
        key='og:description'
      />
      <meta name='og:image' content='https://i.imgur.com/ItIhIM8.png' />
      <meta name='og:image:width' content='1200' />
      <meta name='og:image:height' content='600' />
      <meta name='og:type' content='website' />

      <meta name='twitter:title' content={templateTitle} />
      <meta name='twitter:description' content={templateDescription} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export { SEO };
