import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { metaTags, ldJson } from "../seo";

const getLength = (text) => text ? text.length : 0;

const SEO = ({ seo = {} }) => {
  const { strapiGlobal, site } = useStaticQuery(query);
  const { siteName, favicon } = strapiGlobal;
  const origin = site.siteMetadata.siteUrl;

  const mt = metaTags({
    title: seo.title,
    description: seo.description,
    author: seo.author,
    publisher: seo.publisher,
    type: seo.type,
    image: `${origin}${seo.image}/`,
    image_alt: seo.image_alt,
    url: `${origin}/${seo.url}/`,
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

  const lj = ldJson({
    type: 'TechArticle',
    title: seo.title,
    image: `${origin}${seo.image}/`,
    author: seo.author,
    publisher: seo.publisher,
    keywords: seo.keywords,
    url: `${origin}/${seo.url}/`,
    published_at: seo.published_at,
    description: seo.description,
    content: seo.content,
    contentCount: getLength(seo.title) + getLength(seo.description) + getLength(seo.content),
    origin
  });

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
          href: `${origin}${seo.image}/`,
        },
        {
          rel: "canonical",
          href: `${origin}/${seo.url}/`,
        },
      ]}
      meta={mt}>
      <script type="application/ld+json">
        {JSON.stringify(lj)}
      </script>
    </Helmet>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;