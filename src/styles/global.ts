import { createGlobalStyle } from 'styled-components'
import bootstrap from '~/styles/bootstrap'
import { MAIN_BACKGROUND } from '~/styles/modules/variables'

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
  }
`
