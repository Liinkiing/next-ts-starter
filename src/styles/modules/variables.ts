import { css } from 'styled-components'
import { theme } from '~/styles/themes'

export const MAIN_BACKGROUND = css`
  background: ${props => theme(props).colors.background};
`
