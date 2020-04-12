import type { DefaultTheme } from 'styled-components'
import colors from '~/styles/modules/colors'
import baseTheme from '~/styles/themes/base'

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    background: '#333',
    text: colors.white,
    link: colors.lightBlue,
  },
}

export default theme
