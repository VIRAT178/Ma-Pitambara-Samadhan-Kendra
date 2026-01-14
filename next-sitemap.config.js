const siteUrl = 'https://pitambarasamadhanastro.co.in'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*'],
  transform: async (config, path) => {
    if (path.startsWith('/admin') || path.startsWith('/api')) {
      return null
    }

    const isHomepage = path === '/'

    return {
      loc: path,
      changefreq: isHomepage ? 'daily' : config.changefreq,
      priority: isHomepage ? 1 : config.priority,
      lastmod: new Date().toISOString()
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }]
  }
}
