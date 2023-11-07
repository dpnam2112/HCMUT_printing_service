module.exports = {
  siteUrl: "",
  changefreq: "weekly",
  priority: "1.0",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    var priority = config.priority;
    if (path.includes("posts")) {
      priority = 0.7;
    }
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
