import { forwardRef } from 'react'
import type { ResponsiveValue } from 'styled-system'

import AppBox, { AppBoxOwnProps, FontSize, PolymorphicComponent } from '~/ui/AppBox'
import jsxInnerText from '~/utils/jsx'

export enum HeadingSize {
  Xl = 'xl',
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xs = 'xs',
}

type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const sizes: { [Key in Size]: ResponsiveValue<string | FontSize> } = {
  xl: [FontSize.Xl3, null, FontSize.Xl4],
  lg: [FontSize.Xl, null, FontSize.Xl2],
  md: FontSize.Xl,
  sm: FontSize.Md,
  xs: FontSize.Sm,
}

type Props = Omit<AppBoxOwnProps, 'size' | 'as'> & {
  readonly as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  readonly size?: HeadingSize | Size
  readonly truncate?: number
}

const Heading = forwardRef<any, Props>(({ children, truncate, size = 'xl', as = 'h2', ...rest }, ref) => {
  let content = children
  const innerText = jsxInnerText(content)
  if (truncate && innerText.length > truncate) {
    content = `${innerText.slice(0, truncate)}…`
  }
  return (
    <AppBox
      ref={ref}
      lineHeight="shorter"
      fontWeight="bold"
      fontFamily="heading"
      as={as}
      fontSize={sizes[size]}
      {...rest}
    >
      {content}
    </AppBox>
  )
})

Heading.displayName = 'Heading'

export default Heading as PolymorphicComponent<Props>
