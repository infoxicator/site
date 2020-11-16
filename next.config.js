module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generateSiteMap')
      }
      return config
    }
  }