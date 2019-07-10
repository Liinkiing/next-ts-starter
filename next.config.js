const path = require('path')

module.exports = {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  experimental: {
    publicDirectory: true,
  },
  webpack(config, options) {
    config.node = {
      fs: 'empty',
    }
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
}
