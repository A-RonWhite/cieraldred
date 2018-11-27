module.exports = {
  siteMetadata: {
    title: 'Ciera Aldred',
    description: 'A Portfolio',
    siteUrl: 'https://inspiring-wiles-87e31b.netlify.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ciera Aldred Photography',
        short_name: 'CA Photos',
        start_url: '/',
        background_color: '#524763',
        theme_color: '#524763',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
     'gatsby-plugin-offline',
     {
       resolve: 'gatsby-source-filesystem',
       options: {
         path: `${__dirname}/src/posts`,
         name: 'posts'
       }
     },
     {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
     'gatsby-transformer-remark',
     `gatsby-plugin-netlify-cms`,
     `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
