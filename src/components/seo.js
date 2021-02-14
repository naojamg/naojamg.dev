import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import CustomSeo from "../seo";

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { siteName, favicon } = strapiGlobal;

  let origin = typeof window !== 'undefined' ? window.location.origin : '';

  const metaTags = CustomSeo({
    title: seo.title,
    description: seo.description,
    author: seo.author,
    publisher: seo.publisher,
    type: seo.type,
    image: seo.image,
    image_alt: seo.image_alt,
    url: seo.url,
    locale: 'es_MX',
    site_name: siteName,
    article_published_time: seo.published_at,
    article_author: seo.author,
    article_tag: seo.article_tag,
    site: seo.twitterSite,
    card: seo.twitterCard,
    creator: seo.twitterCreator,
    keywords: seo.keywords,
    robots: 'index, follow'
  });
  console.log(metaTags);

  return (
    <Helmet
      title={seo.title}
      titleTemplate={`%s | ${siteName}`}
      htmlAttributes={{
        lang: 'es',
      }}
      link={[
        {
          rel: "icon",
          href: origin + favicon.localFile.publicURL,
        },
        {
          rel: "image_src",
          href: seo.image,
        },
        {
          rel: "canonical",
          href: seo.url,
        },
      ]}
      meta={metaTags}
    />
  );
};

export default SEO;

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        localFile {
          publicURL
        }
      }
    }
  }
`;