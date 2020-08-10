/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const dotenvLoad = require('dotenv-load')

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

dotenvLoad()

module.exports = withPlugins([withFonts, withImages], {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  webpack(config) {
    config.node = {
      fs: 'empty',
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
      }),
    )
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
})
