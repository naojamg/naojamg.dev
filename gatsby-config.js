require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `naojamg.dev`,
    description: `Blog en español para aprender diferentes tecnologías web.`,
    author: `@naojamg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `naojamg.dev`,
        short_name: `naojamg.dev`,
        start_url: `/`,
        background_color: `#1F2935`,
        theme_color: `#1F2935`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `src/assets/images/gatsby.png`,
            sizes: `196x196`,
            type: `image/png`,
            purpose: `maskable`
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "user"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lato",
              variants: ["400", "700"],
            },
            {
              family: "Nunito",
              variants: ["300", "400", "600"],
            },
          ]
        }
      }
    }
  ],
}
