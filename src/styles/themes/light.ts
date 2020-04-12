import type { DefaultTheme } from 'styled-components'
import colors from '~/styles/modules/colors'
import baseTheme from '~/styles/themes/base'

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    background: colors.white,
    text: colors.dark,
    link: colors.darkBlue,
  },
}

export default theme
