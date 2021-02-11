require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `naojamg.dev`,
    description: `Blog en español para aprender diferentes tecnologías web.`,
    author: `@naojamg`,
    siteUrl: `https://naojamg.dev`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://naojamg.dev`,
        sitemap: `https://naojamg.dev/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-7MQQ1CZ8SC",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-7MQQ1CZ8SC",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
