import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlePreview from '../components/articlePreview';
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data.strapiHomepage.seo}>
      <img className="homePage-img" src={`.${data.strapiHomepage.seo[0].shareImage.localFile.publicURL}`} alt={`Imágen principal`} />
      <div className="article-container">
        <p className="article-container-title">Lo más reciente</p>
        {data.allStrapiArticle.edges.map((article, i) => {
          return (
            <ArticlePreview
              image={article.node.image.localFile.publicURL}
              published_at={article.node.published_at}
              categories={article.node.category}
              title={article.node.title}
              description={article.node.description}
              slug={article.node.slug}
              key={article.node.strapiId}
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
              publicURL
            }
          }
          author {
            username
            picture {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;