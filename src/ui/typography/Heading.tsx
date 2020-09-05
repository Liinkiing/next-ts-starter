import * as React from 'react'
import AppBox, { AppBoxOwnProps, FontSize, PolymorphicComponent } from '~/ui/AppBox'
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

type Props = Omit<AppBoxOwnProps, 'size' | 'as'> & {
  readonly as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  readonly size?: HeadingSize | Size
}

const Heading = React.forwardRef<any, Props>(({ children, size = 'xl', as = 'h2', ...rest }, ref) => {
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
      {children}
    </AppBox>
  )
})

Heading.displayName = 'Heading'

export default Heading as PolymorphicComponent<Props>
