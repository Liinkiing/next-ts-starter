import React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  FontSizeProps,
  FontWeightProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import type { HTMLAttributes, RefAttributes } from 'react'
import { SPACES_SCALES } from '~/styles/themes/base'

type AppBoxHTMLProps = RefAttributes<any> & HTMLAttributes<any>

type FontSizeValues = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

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
  fontSize?: FontSize | FontSizeValues | ResponsiveValue<FontSize | FontSizeValues> | FontSizeProps['fontSize']
}

type FontWeightValues =
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

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
  fontWeight?:
    | FontWeight
    | FontWeightValues
    | ResponsiveValue<FontWeight | FontWeightValues>
    | FontWeightProps['fontWeight']
}

type LineHeightValues = 'normal' | 'none' | 'shorter' | 'short' | 'base' | 'tall' | 'taller'

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
  lineHeight?:
    | LineHeight
    | LineHeightValues
    | ResponsiveValue<LineHeight | LineHeightValues>
    | LineHeightProps['lineHeight']
}

type LetterSpacingValues = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'

export enum LetterSpacing {
  Tighter = 'tighter',
  Tight = 'tight',
  Normal = 'normal',
  Wide = 'wide',
  Wider = 'wider',
  Widest = 'widest',
}

interface AppLetterSpacing {
  letterSpacing?:
    | LetterSpacing
    | LetterSpacingValues
    | ResponsiveValue<LetterSpacing | LetterSpacingValues>
    | LetterSpacingProps['letterSpacing']
}

type AppTypographyProps = Omit<TypographyProps, 'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'>

type StyledSystemProps = ColorProps &
  ShadowProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BorderProps &
  PositionProps &
  AppTypographyProps

type ModifiedStyledSystemProps = AppFontSize & AppLetterSpacing & AppFontWeight & AppLineHeight

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
  shadow,
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  typography,
  position,
)

AppBox.displayName = 'AppBox'

export type PolymorphicAppBox = <E extends React.ElementType = typeof defaultElement>(
  props: PolymorphicBoxProps<E>,
) => JSX.Element

export type PolymorphicComponent<P> = <E extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<E, P>,
) => JSX.Element

export default AppBox as PolymorphicAppBox
