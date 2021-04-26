import NextHead from 'next/head'
import React from 'react'

const defaultDescription = 'A starter made by https://github.com/Liinkiing'
const defaultOGURL = ''
const defaultOGImage = ''

interface Props {
  title?: string
  description?: string
  url?: string
  socialImage?: string
}

const AppHead: React.FC<Props> = ({ title, description, url, socialImage }) => (
  <NextHead>
    <meta key="charset" charSet="UTF-8" />
    <title>{title}</title>
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="/manifest.json" />
    <meta key="description" name="description" content={description} />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    <link key="icon" rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link key="apple-touch-icon" rel="apple-touch-icon" href="/touch-icon.png" />
    <link key="favicon" rel="icon" href="/favicon.ico" />
    <meta key="og-url" property="og:url" content={url} />
    <meta key="og-title" property="og:title" content={title} />
    <meta key="og-description" property="og:description" content={description} />
    <meta key="twitter-site" name="twitter:site" content={url} />
    <meta key="twitter-card" name="twitter:card" content="summary_large_image" />
    <meta key="twitter-image" name="twitter:image" content={socialImage} />
    <meta key="og-image" property="og:image" content={socialImage} />
    <meta key="og-image-width" property="og:image:width" content="1200" />
    <meta key="og-image-height" property="og:image:height" content="630" />
  </NextHead>
)

AppHead.defaultProps = {
  title: process.env.NEXT_PUBLIC_APP_NAME || '',
  description: defaultDescription,
  url: defaultOGURL,
  socialImage: defaultOGImage,
}

export default AppHead
