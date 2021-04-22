/* eslint-disable @typescript-eslint/ban-types */
// Some values comes from chakra-ui, a great UI library!
import type { DefaultTheme } from 'styled-components'

import type { Breakpoints } from '~/@types/styled-components/theme'
import colors from '~/styles/modules/colors'
import { pxToRem } from '~/styles/modules/mixins'
import typography from '~/styles/themes/typography'

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

export const SHADOWS = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  'dark-lg': 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
} as const

export type ThemeShadowsValues = keyof typeof SHADOWS | (string & {})

export const RADII = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const

export type ThemeRadiiValues = keyof typeof RADII | (string & {}) | (number & {})

export const BORDERS = {
  sm: '1px solid',
  md: '4px solid',
  lg: '10px solid',
} as const

export type ThemeBordersValues = keyof typeof BORDERS | (string & {})

export const Z_INDICES = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
} as const

export type ThemeZIndicesValues = keyof typeof Z_INDICES | (string & {}) | (number & {})

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
  sizes: SPACES_SCALES,
  radii: RADII,
  borders: BORDERS,
  shadows: SHADOWS,
  zIndices: Z_INDICES,
}

export default baseTheme as DefaultTheme
