import type { DefaultTheme } from 'styled-components'
import type { Breakpoints } from '~/@types/styled-components/theme'
import { pxToRem } from '~/styles/modules/mixins'
import typography from '~/styles/themes/typography'

export const breakpoints: Breakpoints = {
  tablet: '720px',
  desktop: '1024px',
  wide: '1600px',
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
  breakpoints: [breakpoints.tablet, breakpoints.desktop, breakpoints.wide],
  space: SPACES_SCALES,
}

export default baseTheme as DefaultTheme
