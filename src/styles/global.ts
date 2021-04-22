import { createGlobalStyle } from 'styled-components'

import bootstrap from '~/styles/bootstrap'
import { MAIN_BACKGROUND } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'

export default createGlobalStyle`
  ${bootstrap};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    ${MAIN_BACKGROUND};
    color: ${props => theme(props).colors.text};
  }
`
