const config = {
  siteTitle: '<Beto /> \u22C4 Front End Developer', // Site title.
  siteTitleShort: 'Beto', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Beto \u22C4 Front End Developer', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://betoo.com.br', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Beto é Front End Developer autodidata.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: 'r', // Disqus shortname.
  postDefaultCategoryID: '', // Default category for posts.
  dateFromFormat: 'DD-MM-YYYY', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: 'Beto da Silva', // Username to display in the author segment.
  userEmail: 'oi@betoo.com', // Email used for RSS feed's author segment
  userTwitter: '_betojs', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Recife, Brazil', // User location to display in the author segment.
  userAvatar: '/static/assets/images/profile-pic.jpg', // User avatar to display in the author segment.
  userDescription:
    'Front Developer trabalhando remoto há cerca de um ano. Aqui compartilha experimentos, aprendizados e experiências sobre desenvolvimento web ou qualquer coisa que ache necessário ser explicado em mais de 500 palavras.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/Vagr9K/gatsby-advanced-starter',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Vagr9K',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:vagr9k@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2019. Beto da Silva ─ Front End Developer', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
