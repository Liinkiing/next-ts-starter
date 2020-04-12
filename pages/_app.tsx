import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/styles/global'
import { light } from '~/styles/themes'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <AppNav />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
