/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

const dotenvLoad = require('dotenv-load')

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

dotenvLoad()

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com cdn.usefathom.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next/dist/server/config-shared').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
      }),
    )

    return config
  },
}

module.exports = withPlugins([[withBundleAnalyzer], withFonts, withImages], nextConfig)
