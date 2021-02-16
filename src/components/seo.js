import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import CustomSeo from "../seo";

const SEO = ({ seo = {} }) => {
  const { strapiGlobal, site } = useStaticQuery(query);
  const { siteName, favicon } = strapiGlobal;
  const origin = site.siteMetadata.siteUrl;

  const metaTags = CustomSeo({
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

  const schemaHowTo = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    name: 'Como crear una Chrome Extension con Svelte',
    author: {
      '@type': 'Person',
      name: 'Joel Morales García'
    },
    datePublished: '2021-02-15',
    image: 'https://naojamg.dev/static/3f5b86689243b0555159cb49aca2cfa2/422ae/miyajima.png.png',
    publisher: {
      '@type': 'Organization',
      name: 'Joel Morales García'
    }
  }

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
      meta={metaTags}>
      <script type="application/ld+json">
        {JSON.stringify(schemaHowTo)}
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