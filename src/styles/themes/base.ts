import type { DefaultTheme } from 'styled-components'
import type { Breakpoints } from '~/@types/styled-components/theme'
import { pxToRem } from '~/styles/modules/mixins'
import typography from '~/styles/themes/typography'
import colors from '~/styles/modules/colors'

export const BR_TABLET = 720
export const BR_DESKTOP = 1024
export const BR_WIDE = 1800
export const BR_ULTRAWIDE = 2200

export const breakpoints: Breakpoints = {
  tablet: `${BR_TABLET}px`,
  desktop: `${BR_DESKTOP}px`,
  wide: `${BR_WIDE}px`,
  ultraWide: `${BR_ULTRAWIDE}px`,
}

export const SPACES_SCALES = [
  0,
  pxToRem(4), // 2xs
  pxToRem(8), // xs
  pxToRem(16), // base
  pxToRem(32), // medium
  pxToRem(64), // large
  pxToRem(128), // xl
  pxToRem(256), // 2xl
  pxToRem(512), // 3xl
] as const

const baseTheme: Partial<DefaultTheme> = {
  ...typography,
  colors: colors as any,
  breakpoints: [breakpoints.tablet, breakpoints.desktop, breakpoints.wide, breakpoints.ultraWide],
  mediaQueries: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
    ultraWide: `@media screen and (min-width: ${breakpoints.ultraWide})`,
  },
  space: SPACES_SCALES,
}

export default baseTheme as DefaultTheme
