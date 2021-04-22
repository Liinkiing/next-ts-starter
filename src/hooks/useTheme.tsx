import { useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

const useTheme = (): DefaultTheme => {
  return useContext(ThemeContext)
}

export default useTheme
