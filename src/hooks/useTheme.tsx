import { useContext } from 'react'
import type { DefaultTheme } from 'styled-components'
import { ThemeContext } from 'styled-components'

const useTheme = (): DefaultTheme => {
  return useContext(ThemeContext)
}

export default useTheme
