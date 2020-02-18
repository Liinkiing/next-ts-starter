import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import GlobalStyle from '~/styles/global'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <AppNav />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
