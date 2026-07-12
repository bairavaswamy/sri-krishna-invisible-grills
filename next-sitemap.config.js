const serviceAreaPattern = /^\/chennai\/[^/]+\/[^/]+$/;
const cityChildPattern = /^\/chennai\/[^/]+$/;

const config = {
  siteUrl: "https://srikrishnainvisiblegrills.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 15000,
  outDir: "./out",
  exclude: ["/admin/*", "/api/*", "/private/*", "/404", "/manifest.webmanifest"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (_config, path) => {
    let priority = 0.72;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/chennai") {
      priority = 0.95;
      changefreq = "daily";
    } else if (path === "/contact-us") {
      priority = 0.9;
    } else if (["/about", "/gallery", "/search"].includes(path)) {
      priority = 0.78;
    } else if (serviceAreaPattern.test(path)) {
      priority = 0.74;
    } else if (cityChildPattern.test(path)) {
      priority = 0.82;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
