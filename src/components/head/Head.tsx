import React from 'react';

import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { config } from 'lib/site.config';

interface SEOProps {
  title: string;
  description?: string;
  banner?: string;
  canonical?: string;
}

export const Head = ({ title }: SEOProps) => {
  const { asPath } = useRouter();
  const { siteUrl, siteTitle, favicon, description } = config;

  const seo = {
    title: title || siteTitle,
    url: `${siteUrl}${asPath || ''}`,
  };

  return (
    <>
      <NextHead>
        <title>{`${title} - ${siteTitle}`}</title>
        <link rel="shortcut icon" href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={description} />
      </NextHead>
    </>
  );
};
