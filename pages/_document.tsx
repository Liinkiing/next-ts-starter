import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as React from 'react'
import GlobalStyle from '~/styles/global'

interface Props {
  styleTags: Array<React.ReactElement<{}>>
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
