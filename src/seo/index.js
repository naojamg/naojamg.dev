import OpenGraph from './openGraph';
import Twitter from './twitter';
import General from './general';

const metaTags = (options = {}) => {
  const og = OpenGraph(options);
  const t = Twitter(options);
  const g = General(options);

  return [...g, ...og, ...t];
}

const ldJson = (options) => {
  return {
    "@context": "https://schema.org",
    "@type": options.type,
    "headline": options.title,
    "image": options.image,
    "author": {
      "@type": "Person",
      "familyName": options.author,
    },
    "editor": {
      "@type": "Person",
      "familyName": options.author,
    },
    "genre": options.keywords,
    "keywords": options.keywords,
    "wordcount": options.contentCount,
    "publisher": {
      "@type": "Person",
      "familyName": options.publisher,
    },
    "url": options.url,
    "datePublished": options.published_at,
    "dateCreated": options.published_at,
    "dateModified": options.published_at,
    "description": options.description,
    "articleBody": options.content,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": options.origin
   },
  }
}

export { metaTags, ldJson };