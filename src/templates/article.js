import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import PillBadge from '../components/pillBadge';
import "../assets/css/main.css";
import CodeBlock from "../components/CodeBlock";
import { Disqus } from 'gatsby-plugin-disqus';

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

  const disqusConfig = {
    url: `https://naojamg.dev/${article.slug}/`,
    identifier: article.id,
    title: article.title
  };

  const article_tag = ['naojamg.dev'];
  article.category.forEach(cat => article_tag.push(cat.name));

  const seo = {
    title: article.title,
    type: 'article',
    image: article.image.localFile.publicURL,
    image_alt: article.title,
    url: article.slug,
    description: article.description,
    content: article.content,
    published_at: article.published_at,
    author: article.author.name,
    publisher: article.author.name,
    article_tag,
    keywords: article_tag.reduce((prev, curr) => prev + ', ' + curr),
    twitterSite: `@${article.author.username}`,
    twitterCreator: `@${article.author.username}`,
    twitterCard: 'summary_large_image'
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
            fadeIn={false}
            loading="eager"
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
        </div>
        <div className="disqus-article">
          <Disqus config={disqusConfig} />
        </div>
      </div>
    </Layout>
  );
};

export default Article;