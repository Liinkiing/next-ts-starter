import React from 'react'
import AppBox, { AppBoxProps, FontSize } from '~/ui/AppBox'
import { ResponsiveValue } from 'styled-system'

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

type Props = Omit<AppBoxProps, 'size'> & {
  readonly size?: HeadingSize | Size
}

const Heading = React.forwardRef<any, Props>(({ children, size = 'xl', ...rest }, ref) => {
  return (
    <AppBox
      ref={ref}
      as="h2"
      lineHeight="shorter"
      fontWeight="bold"
      fontFamily="heading"
      fontSize={sizes[size]}
      {...rest}
    >
      {children}
    </AppBox>
  )
})

Heading.displayName = 'Heading'

export default Heading
