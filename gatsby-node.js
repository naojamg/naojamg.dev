exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
        {
          articles: allStrapiArticle(sort: {fields: [published_at]order: DESC}, filter: { status: { eq: "published" } }) {
            edges {
              node {
                slug
              }
            }
          }
          authors: allStrapiUser {
            edges {
              node {
                username
              }
            }
          }
        }
      `
  );

  if (result.errors) {
    throw result.errors;
  }

  const articles = result.data.articles.edges;
  const authors = result.data.authors.edges;

  const articleTemplate = require.resolve("./src/templates/article.js");
  const authorTemplate = require.resolve("./src/templates/about.js");

  // Create article pages
  articles.forEach((article, index) => {
    createPage({
      path: `/${article.node.slug}`,
      component: articleTemplate,
      context: {
        slug: article.node.slug,
      },
    });
  });

  // Create authors pages
  authors.forEach((author, index) => {
    createPage({
      path: `/${author.node.username}`,
      component: authorTemplate,
      context: {
        username: author.node.username,
      },
    });
  });

};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "StrapiArticle") {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiArticleContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};