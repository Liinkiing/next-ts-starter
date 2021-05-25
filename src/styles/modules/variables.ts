import { css } from 'styled-components'

import type { Breakpoints } from '~/@types/styled-components/theme'
import { theme } from '~/styles/themes'
import { breakpoints } from '~/styles/themes/base'

export const BREAKPOINTS: Breakpoints = breakpoints

export const ELASTIC_BEZIER = 'cubic-bezier(0.32, 2, 0.55, 0.27)'

export const MAIN_BACKGROUND = css`
  background: ${props => theme(props).colors.background};
`
