import type { DefaultTheme } from 'styled-components'
import colors from '~/styles/modules/colors'
import baseTheme from '~/styles/themes/base'

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    background: '#333',
    text: colors.white,
    link: colors.lightBlue,
    primary: colors.orange,
    secondary: colors.violet,
    tertiary: colors.green,
  },
}

export default theme
