import React from 'react'
import App, { Container } from 'next/app'
import AppNav from '~/components/layout/AppNav'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AppNav />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
