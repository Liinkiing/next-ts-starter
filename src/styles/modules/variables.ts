import { css } from 'styled-components'
import { theme } from '~/styles/themes'
import { Breakpoints } from '~/@types/styled-components/theme'
import { breakpoints } from '~/styles/themes/base'

export const BREAKPOINTS: Breakpoints = breakpoints

export const MAIN_BACKGROUND = css`
  background: ${props => theme(props).colors.background};
`
