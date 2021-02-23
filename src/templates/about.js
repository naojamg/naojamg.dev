import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import "../assets/css/main.css";
import CodeBlock from "../components/CodeBlock";

export const query = graphql`
  query AuthorQuery($username: String!) {
    strapiUser(username: { eq: $username }) {
      name
      username
      description
      content
      created_at
      picture {
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

const Author = ({ data }) => {
  const author = data.strapiUser;
  const author_tag = ['naojamg.dev', 'Software Developer'];
  const title = `¡HOLA! Soy ${author.name}`;

  const seo = {
    title: title,
    type: 'profile',
    image: author.picture.localFile.publicURL,
    image_alt: author.name,
    url: author.username,
    description: author.description,
    content: author.content,
    published_at: author.created_at,
    author: author.name,
    publisher: author.name,
    article_tag: author_tag,
    keywords: author_tag.reduce((prev, curr) => prev + ', ' + curr),
    twitterSite: `@${author.username}`,
    twitterCreator: `@${author.username}`,
    twitterCard: 'summary_large_image'
  };

  return (
    <Layout seo={seo}>
      <div className="author-detail">
        <div className="author-detail-content-header">
          <Img
            fluid={author.picture.localFile.childImageSharp.fluid}
            alt={author.name}
            title={author.name}
            className="authorDetail-img"
            imgStyle={{ objectFit: "contain" }}
            fadeIn={false}
            loading="eager"
          />
          <div>
            <h1 className="author-detail-title">{title}</h1>
            <p className="author-detail-content-desc">{author.description}</p>
          </div>
        </div>
        <div className="author-detail-content">
          <Markdown className="author-detail-content-html" source={author.content} escapeHtml={false} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    </Layout>
  );
};

export default Author;