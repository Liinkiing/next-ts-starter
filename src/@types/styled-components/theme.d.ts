import 'styled-components'

import colors from '~/styles/modules/colors'
import { BORDERS, RADII, SHADOWS, Z_INDICES } from '~/styles/themes/base'
import { FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, LETTER_SPACINGS, LINE_HEIGHTS } from '~/styles/themes/typography'

export interface Breakpoints {
  tablet: string
  desktop: string
  wide: string
  ultraWide: string
}

declare module 'styled-components' {
  export interface Typography {
    letterSpacings: typeof LETTER_SPACINGS
    lineHeights: typeof LINE_HEIGHTS
    fontWeights: typeof FONT_WEIGHTS
    fonts: typeof FONT_FAMILIES
    fontSizes: typeof FONT_SIZES
  }

  export interface DefaultTheme extends Typography {
    breakpoints: string[]
    space: readonly [number, ...string]
    sizes: readonly [number, ...string]
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
    radii: typeof RADII
    shadows: typeof SHADOWS
    borders: typeof BORDERS
    zIndices: typeof Z_INDICES
  }
}
