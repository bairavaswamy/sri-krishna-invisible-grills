const config = {
  siteUrl: 'https://dksafetysolutions.com',
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 15000,
   robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/admin/*", "/api/*", '/private/*', '/404'],
  transform: async (config, path) => {
      let priority = 0.8;

      if (path === "/") priority = 1.0;
      if (path === "/contact-us") priority = 0.9;

      return {
        loc: path,
        changefreq: "daily",
        priority,
        lastmod: new Date().toISOString(),
      };
    },
    outDir: './out', 
};

module.exports = config;
