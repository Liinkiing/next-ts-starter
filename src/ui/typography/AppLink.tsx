import React from 'react'
import AppBox, { AppBoxProps, LineHeight } from '~/ui/AppBox'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

const AppLinkInner = styled(AppBox)`
  ${({ theme }) => css`
    transition: color 0.2s ease;
    color: ${theme.colors.link};
    &:hover {
      cursor: pointer;
      color: ${darken(0.1, theme.colors.link)};
    }
  `}
`

const AppLink = React.forwardRef<any, AppBoxProps>((props, ref) => {
  return <AppLinkInner ref={ref} as="a" fontFamily="body" lineHeight={LineHeight.Base} {...props} />
})

AppLink.displayName = 'AppLink'

export default AppLink
