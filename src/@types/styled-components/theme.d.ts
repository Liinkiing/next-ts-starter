import 'styled-components'
import colors from '~/styles/modules/colors'

export interface Breakpoints {
  tablet: string
  desktop: string
  wide: string
  ultraWide: string
}

declare module 'styled-components' {
  import { ResponsiveValue } from 'styled-system'

  export interface Typography {
    letterSpacings: {
      tighter: ResponsiveValue<string | number>
      tight: ResponsiveValue<string | number>
      normal: ResponsiveValue<string | number>
      wide: ResponsiveValue<string | number>
      wider: ResponsiveValue<string | number>
      widest: ResponsiveValue<string | number>
    }
    lineHeights: {
      normal: ResponsiveValue<string | number>
      none: ResponsiveValue<string | number>
      shorter: ResponsiveValue<string | number>
      short: ResponsiveValue<string | number>
      base: ResponsiveValue<string | number>
      tall: ResponsiveValue<string | number>
      taller: ResponsiveValue<string | number>
    }
    fontWeights: {
      hairline: ResponsiveValue<number>
      thin: ResponsiveValue<number>
      light: ResponsiveValue<number>
      normal: ResponsiveValue<number>
      medium: ResponsiveValue<number>
      semibold: ResponsiveValue<number>
      bold: ResponsiveValue<number>
      extrabold: ResponsiveValue<number>
      black: ResponsiveValue<number>
    }
    fonts: {
      heading: string
      body: string
      mono: string
    }
    fontSizes: {
      xs: ResponsiveValue<string | number>
      sm: ResponsiveValue<string | number>
      md: ResponsiveValue<string | number>
      lg: ResponsiveValue<string | number>
      xl: ResponsiveValue<string | number>
      '2xl': ResponsiveValue<string | number>
      '3xl': ResponsiveValue<string | number>
      '4xl': ResponsiveValue<string | number>
      '5xl': ResponsiveValue<string | number>
      '6xl': ResponsiveValue<string | number>
    }
  }

  export interface DefaultTheme extends Typography {
    breakpoints: string[]
    space: readonly [number, ...string]
    mediaQueries: {
      tablet: string
      desktop: string
      wide: string
      ultraWide: string
    }
    colors: typeof colors & {
      background: string
      text: string
      link: string
      primary: string
      secondary: string
      tertiary: string
    }
  }
}
