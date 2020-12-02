// @flow
import { DefaultTheme, ThemeContext } from 'styled-components'
import { useContext } from 'react'

const useTheme = (): DefaultTheme => {
  return useContext(ThemeContext)
}

export default useTheme
