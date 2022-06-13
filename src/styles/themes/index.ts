import type { DefaultTheme } from 'styled-components'

export const theme = <Props extends { theme: DefaultTheme }>(props: Props) => props.theme

export { default as dark } from './dark'

export { default as light } from './light'
