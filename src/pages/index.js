import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlePreview from '../components/articlePreview';
import Img from 'gatsby-image';

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Img
        fadeIn={false}
        loading="eager"
        className="homePage-img"
        fluid={data.strapiHomepage.seo.shareImage.localFile.childImageSharp.fluid}
        alt={`Imágen principal`} title={`Imágen principal`}
        style={{ height: '50vh' }}
      />
      <h1 className="article-container-title">Los más recientes</h1>
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
        metaTitle
        metaDescription
        shareImage {
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