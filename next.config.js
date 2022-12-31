module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generateSiteMap')
      }
      return config
    },
    images: {
      domains: ['www.infoxication.net'],
    },
    i18n: {
      locales: ['en-GB', 'es-ES'],
      defaultLocale: 'en-GB',
      localeDetection: false,
    },
  }