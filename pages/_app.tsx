import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <AppNav />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
