require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: 'Swarupa Digital',
    siteHeadline: 'Swarupa Digital',
    siteTitleAlt: `Swarupa Digital`,
    siteUrl: 'https://mattjager.com',
    siteDescription: 'Swarupa Digital',
    siteLanguage: 'en',
    siteImage: 'https://mattjager.com/static/banner.jpg',
    author: 'Matt Jager'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swarupa Digital`,
        short_name: `Swarupa`,
        description: `Portfolio for Swarupa Digital`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
