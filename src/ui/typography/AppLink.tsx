import Link, { LinkProps } from 'next/link'
import React from 'react'
import styled, { css, CSSObject } from 'styled-components'

import AppBox, { AppBoxProps, FontWeight, LineHeight } from '~/ui/AppBox'

interface OwnProps {
  readonly applyActiveLinkStyles?: boolean
  readonly applyFilterOnHover?: boolean
  readonly activeLinkStyles?: TemplateStringsArray | CSSObject
}

const AppLinkInner = styled(AppBox)<OwnProps>`
  transition: filter 0.2s ease, opacity 0.2s ease, color 0.3s ease;
  &:hover {
    cursor: pointer;
    ${props =>
      props.applyFilterOnHover &&
      css`
        filter: brightness(80%);
      `};
  }
  ${props =>
    props.applyActiveLinkStyles &&
    css`
      color: ${props => props.theme.colors.link};
      ${props => (props as any).activeLinkStyles && css((props as any).activeLinkStyles)};
    `}
`

type Props = OwnProps & Omit<AppBoxProps, 'as'> & LinkProps

const AppLink = React.forwardRef<HTMLElement, Props>(
  (
    {
      href,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      applyActiveLinkStyles,
      activeLinkStyles,
      applyFilterOnHover = true,
      passHref = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
      >
        <AppLinkInner
          applyActiveLinkStyles={applyActiveLinkStyles}
          activeLinkStyles={activeLinkStyles}
          applyFilterOnHover={applyFilterOnHover}
          css={{ textDecoration: 'none' }}
          fontWeight={FontWeight.Semibold}
          ref={ref}
          fontFamily="body"
          color="link"
          lineHeight={LineHeight.Base}
          {...rest}
          as="a"
        />
      </Link>
    )
  },
)

AppLink.displayName = 'AppLink'

export default AppLink
