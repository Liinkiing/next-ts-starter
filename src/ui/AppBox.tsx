import shouldForwardProp from '@styled-system/should-forward-prop'
import type { Property } from 'csstype'
import type { HTMLAttributes, RefAttributes } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system'

import type { ThemeColorsValues } from '~/styles/modules/colors'
import {
  SPACES_SCALES,
  ThemeBordersValues,
  ThemeRadiiValues,
  ThemeShadowsValues,
  ThemeZIndicesValues,
} from '~/styles/themes/base'
import type {
  ThemeFontSizesValues,
  ThemeFontFamiliesValue,
  ThemeFontWeightsValues,
  ThemeLetterSpacingsValues,
  ThemeLineHeightsValues,
} from '~/styles/themes/typography'

type AppBoxHTMLProps = RefAttributes<any> & HTMLAttributes<any>

export enum FontSize {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Xl2 = '2xl',
  Xl3 = '3xl',
  Xl4 = '4xl',
  Xl5 = '5xl',
  Xl6 = '6xl',
}

interface AppFontSize {
  fontSize?: ResponsiveValue<FontSize | ThemeFontSizesValues>
}

export enum FontWeight {
  Hairline = 'hairline',
  Thin = 'thin',
  Light = 'light',
  Normal = 'normal',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold',
  Extrabold = 'extrabold',
  Black = 'black',
}

interface AppFontWeight {
  fontWeight?: ResponsiveValue<FontWeight | ThemeFontWeightsValues>
}

export enum FontFamily {
  Heading = 'heading',
  Body = 'body',
  Mono = 'mono',
}

interface AppFontFamily {
  fontFamily?: ResponsiveValue<FontFamily | ThemeFontFamiliesValue>
}

export enum LineHeight {
  Normal = 'normal',
  None = 'none',
  Shorter = 'shorter',
  Short = 'short',
  Base = 'base',
  Tall = 'tall',
  Taller = 'taller',
}

interface AppLineHeight {
  lineHeight?: ResponsiveValue<LineHeight | ThemeLineHeightsValues>
}

export enum LetterSpacing {
  Tighter = 'tighter',
  Tight = 'tight',
  Normal = 'normal',
  Wide = 'wide',
  Wider = 'wider',
  Widest = 'widest',
}

interface AppLetterSpacing {
  letterSpacing?: ResponsiveValue<LetterSpacing | ThemeLetterSpacingsValues>
}

type AppTypographyProps = Omit<
  TypographyProps,
  'fontFamily' | 'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'
>

type AppCustomStyledProps = {
  minSize?: StyledSystemProps['size']
  maxSize?: StyledSystemProps['size']
}

type AppShadowProps = {
  /**
   * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
   * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   */
  boxShadow?: ResponsiveValue<ThemeShadowsValues | Property.BoxShadow | number>
  /**
   * The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied
   * to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from
   * the element, blur radius, and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
   */
  textShadow?: ResponsiveValue<ThemeShadowsValues | Property.TextShadow | number>
}

type ColorsProps = ResponsiveValue<ThemeColorsValues>

type AppBorderProps = {
  /**
   * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
   * and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   */
  border?: ResponsiveValue<ThemeBordersValues>
  borderX?: ResponsiveValue<ThemeBordersValues>
  borderY?: ResponsiveValue<ThemeBordersValues>
  /**
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   */
  borderColor?: ColorsProps
  /**
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   */
  borderTopColor?: ColorsProps
  /**
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   */
  borderBottomColor?: ColorsProps
  /**
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   */
  borderLeftColor?: ColorsProps
  /**
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   */
  borderRightColor?: ColorsProps

  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   */
  borderRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   */
  borderTopLeftRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   */
  borderTopRightRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   */
  borderBottomLeftRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   */
  borderBottomRightRadius?: ResponsiveValue<ThemeRadiiValues>
}

type AppColorProps = {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  color?: ColorsProps
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bg?: ColorsProps
  backgroundColor?: ColorsProps
}

type AppPositionProps = {
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<ThemeZIndicesValues>
}

type StyledSystemProps = ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  Omit<PositionProps, 'zIndex'>

type ModifiedStyledSystemProps = AppBorderProps &
  AppTypographyProps &
  AppPositionProps &
  AppCustomStyledProps &
  AppShadowProps &
  AppColorProps &
  AppFontSize &
  AppLetterSpacing &
  AppFontWeight &
  AppFontFamily &
  AppLineHeight

interface CustomBoxProps {
  readonly uppercase?: boolean
  readonly css?:
    | ((props: { theme: DefaultTheme } & Record<string, any>) => Record<string, unknown>)
    | ReturnType<typeof css>
    | Record<string, unknown>
  readonly ref?: any
}

export type AppBoxProps = AppBoxHTMLProps & CustomBoxProps & StyledSystemProps & ModifiedStyledSystemProps

type PropsOf<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<
  E,
  React.ComponentPropsWithRef<E>
>

export interface AppBoxOwnProps<E extends React.ElementType = React.ElementType> extends AppBoxProps {
  as?: E
}

export type PolymorphicBoxProps<E extends React.ElementType> = AppBoxOwnProps<E> &
  Omit<PropsOf<E>, keyof AppBoxOwnProps>

export type PolymorphicComponentProps<E extends React.ElementType, P> = P & PolymorphicBoxProps<E>

const defaultElement = 'div'

export const Spacing = {
  None: Number(SPACES_SCALES[0]),
  Xs2: Number(SPACES_SCALES[1].replace('rem', '')) * 16,
  Xs: Number(SPACES_SCALES[2].replace('rem', '')) * 16,
  Base: Number(SPACES_SCALES[3].replace('rem', '')) * 16,
  Medium: Number(SPACES_SCALES[4].replace('rem', '')) * 16,
  Large: Number(SPACES_SCALES[5].replace('rem', '')) * 16,
  Xl: Number(SPACES_SCALES[6].replace('rem', '')) * 16,
  Xl2: Number(SPACES_SCALES[7].replace('rem', '')) * 16,
  Xl3: Number(SPACES_SCALES[8].replace('rem', '')) * 16,
} as const

const AppBox = styled('div').withConfig({
  shouldForwardProp: prop => {
    return shouldForwardProp(prop)
  },
})<AppBoxProps>(
  props => ({
    textTransform: props.uppercase ? 'uppercase' : undefined,
  }),
  compose(
    system({
      minSize: {
        properties: ['minWidth', 'minHeight'],
        scale: 'sizes',
      },
      maxSize: {
        properties: ['maxWidth', 'maxHeight'],
        scale: 'sizes',
      },
    }),
    shadow,
    color,
    space,
    layout,
    flexbox,
    grid,
    border,
    typography,
    position,
  ),
)

AppBox.displayName = 'AppBox'

export type PolymorphicAppBox = <E extends React.ElementType = typeof defaultElement>(
  props: PolymorphicBoxProps<E>,
) => JSX.Element

export type PolymorphicComponent<P> = <E extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<E, P>,
) => JSX.Element

export default AppBox as PolymorphicAppBox
