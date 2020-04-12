import type { DefaultTheme } from 'styled-components'
import type { Breakpoints } from '~/@types/styled-components/theme'
import { pxToRem } from '~/styles/modules/mixins'

export const breakpoints: Breakpoints = {
  tablet: '720px',
  desktop: '1024px',
  wide: '1600px',
}

const baseTheme: Partial<DefaultTheme> = {
  breakpoints: [breakpoints.tablet, breakpoints.desktop, breakpoints.wide],
  space: [0, pxToRem(4), pxToRem(8), pxToRem(16), pxToRem(32), pxToRem(64), pxToRem(128), pxToRem(256), pxToRem(512)],
}

export default baseTheme as DefaultTheme
