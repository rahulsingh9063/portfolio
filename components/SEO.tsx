import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

function SEO() {
  const getAbsoluteImage = () => {
    if (!seoData.image) return undefined;
    // If it's already an absolute URL or data URL, return as-is
    if (/^(https?:)?\/\//i.test(seoData.image) || seoData.image.startsWith("data:")) {
      return seoData.image;
    }

    // Otherwise, build absolute URL from seoData.url (if available)
    const base = (seoData.url || "").replace(/\/$/, "");
    return `${base}${seoData.image.startsWith("/") ? seoData.image : `/${seoData.image}`}`;
  };

  const imageUrl = getAbsoluteImage();

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta property="og:site_name" content={seoData.title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      {imageUrl ? <meta property="twitter:image" content={imageUrl} /> : null}
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Head>
  );
}

// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

export default SEO;
