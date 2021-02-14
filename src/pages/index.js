import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlePreview from '../components/articlePreview';
import Img from 'gatsby-image';
const IndexPage = () => {
  let origin = typeof window !== 'undefined' ? window.location.origin : '';
  const data = useStaticQuery(query);
  return (
    <Layout seo={{
      title: data.strapiHomepage.seo.title,
      description: data.strapiHomepage.seo.description,
      author: data.allStrapiArticle.edges[0].node.author.name,
      publisher: data.allStrapiArticle.edges[0].node.author.name,
      type: 'website',
      image: origin + data.strapiHomepage.seo.image.localFile.publicURL,
      image_alt: data.strapiHomepage.seo.title,
      url: origin,
      twitterSite: `@${data.allStrapiArticle.edges[0].node.author.username}`,
      twitterCreator: `@${data.allStrapiArticle.edges[0].node.author.username}`,
      twitterCard: 'summary'
    }}>
      <Img
        fadeIn={false}
        loading="eager"
        className="homePage-img"
        fluid={data.strapiHomepage.seo.image.localFile.childImageSharp.fluid}
        alt={`Imágen principal`} title={`Imágen principal`}
        imgStyle={{ objectFit: "contain" }}
      />
      <h1 className="article-container-title">{data.strapiHomepage.title}</h1>
      <div className="article-container">
        {data.allStrapiArticle.edges.map((article, i) => {
          return (
            <ArticlePreview
              image={article.node.image.localFile.childImageSharp.fluid}
              published_at={article.node.published_at}
              categories={article.node.category}
              title={article.node.title}
              description={article.node.description}
              slug={article.node.slug}
              key={`article__${article.node.strapiId}`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      title
      seo {
        title
        description
        image {
          localFile {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          content
          description
          published_at
          category {
            name
            color
            backgroundColor
          }
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          author {
            name
            username
            picture {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;