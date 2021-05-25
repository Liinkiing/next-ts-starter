import * as React from 'react'
import type { FlexboxProps } from 'styled-system'

import useTheme from '~/hooks/useTheme'
import AppBox, { AppBoxProps, PolymorphicComponent } from '~/ui/AppBox'

export interface FlexOptions {
  align?: FlexboxProps['alignItems']
  justify?: FlexboxProps['justifyContent']
  wrap?: FlexboxProps['flexWrap']
  direction?: FlexboxProps['flexDirection']
  basis?: FlexboxProps['flexBasis']
  grow?: FlexboxProps['flexGrow']
  shrink?: FlexboxProps['flexShrink']
  spacing?: number | string
}

export type FlexProps = Omit<
  AppBoxProps,
  'display' | 'flexDirection' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexBasis' | 'flexGrow' | 'spacing'
> &
  FlexOptions

const Flex = React.forwardRef<HTMLElement, FlexProps>((props, ref) => {
  const { direction = 'row', align, justify, wrap, basis, grow, spacing: userSpacing, ...rest } = props
  const theme = useTheme()
  const spacing = typeof userSpacing === 'number' ? theme.space[userSpacing] : userSpacing
  const styles = {
    ...(spacing
      ? {
          '& > *': {
            ...(typeof direction === 'string' && direction === 'row' && { marginLeft: spacing }),
            ...(typeof direction === 'string' && direction === 'column' && { marginTop: spacing }),
            // While `gap` for flex is not supported by a mojority of browser,
            // we prefer this approach to have a broader compatibility, and also to support
            // responsive values 🔥🥵🔥
            ...(Array.isArray(direction) &&
              direction.reduce(
                (acc, value, index) => {
                  return {
                    ...acc,
                    [`@media screen and (min-width: ${theme.breakpoints[index]})`]:
                      direction[index + 1] === undefined
                        ? {}
                        : {
                            ...((direction[index + 1] ?? 'row') === 'row'
                              ? { marginLeft: spacing, marginTop: 0 }
                              : { marginTop: spacing, marginLeft: 0 }),
                          },
                  }
                },
                {
                  ...(direction[0] === 'row' && { marginLeft: spacing, marginTop: 0 }),
                  ...(direction[0] === 'column' && {
                    marginTop: spacing,
                    marginLeft: 0,
                  }),
                },
              )),
            '&:first-child': {
              marginLeft: 0,
              marginTop: 0,
            },
          },
        }
      : {}),
  }

  return (
    <AppBox
      display="flex"
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      flexBasis={basis}
      flexGrow={grow}
      ref={ref}
      css={styles}
      {...rest}
    />
  )
})

Flex.displayName = 'Flex'

export default Flex as PolymorphicComponent<FlexProps>
