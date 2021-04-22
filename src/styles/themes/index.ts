import type { DefaultTheme } from 'styled-components'

import { default as dark } from './dark'
import { default as light } from './light'

export const theme = <Props extends { theme: DefaultTheme }>(props: Props) => props.theme

export { dark, light }
