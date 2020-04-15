import 'styled-components'

export interface Breakpoints {
  tablet: string
  desktop: string
  wide: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[]
    space: readonly [number, ...string]
    colors: {
      background: string
      text: string
      link: string
      primary: string
      secondary: string
      tertiary: string
    }
  }
}
