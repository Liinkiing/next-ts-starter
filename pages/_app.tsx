import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/styles/global'
import { light } from '~/styles/themes'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <AppNav />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    )
  }
}

export default MyApp
