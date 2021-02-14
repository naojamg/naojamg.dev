import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import PillBadge from '../components/pillBadge';
import "../assets/css/main.css";
import CodeBlock from "../components/CodeBlock";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      slug
      description
      content
      published_at
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
      category {
        name
        color
        backgroundColor
      }
      author {
        name
        username
      }
    }
  }
`;

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const article_tag = [];
  article.category.forEach(cat => article_tag.push(cat.name));
  let origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  const seo = {
    title: article.title,
    type: 'article',
    image: origin + article.image.localFile.publicURL,
    image_alt: article.title,
    url: `${origin}/article/${article.slug}`,
    description: article.description,
    published_at: article.published_at,
    author: article.author.name,
    publisher: article.author.name,
    article_tag,
    keywords: article_tag,
    twitterSite: `@${article.author.username}`,
    twitterCreator: `@${article.author.username}`,
    twitterCard: 'summary'
  };

  return (
    <Layout seo={seo}>
      <div className="article-detail">
        <div className="article-detail-content-header ">
          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-pub">
            <Moment format="DD MMM YYYY">{article.published_at}</Moment>
          </p>
        </div>
        <div className="article-detail-content">
          <Img
            fluid={article.image.localFile.childImageSharp.fluid}
            alt={article.title}
            title={article.title}
            className="articleDetail-img"
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="article-detail-content-desc">{article.description}</p>
          <Markdown className="article-detail-content-html" source={article.content} escapeHtml={false} renderers={{ code: CodeBlock }} />
          <div className="article-detail-content-footer">
            <p>{`Publicado por: ${article.author.name}`}</p>
            <div className="badgeContainer">
              {article.category.map((category, i) => {
                return (
                  <PillBadge
                    text={category.name}
                    backgroundColor={category.backgroundColor}
                    color={category.color}
                    key={`category__${category.name}`}
                  />
                );
              })}
            </div>
          </div>
          {/* <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.author.picture && (
                <Img
                  fixed={article.author.picture.localFile.publicURL}
                  imgStyle={{ position: "static", borderRadius: "50%" }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.username}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Article;