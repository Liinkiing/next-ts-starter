import styled from 'styled-components'
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
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import type { ElementType, FC, HTMLAttributes, RefAttributes } from 'react'
import { SPACES_SCALES } from '~/styles/themes/base'

interface As {
  as?: ElementType
}

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
  readonly css?: any
  readonly ref?: any
}

export type AppBoxProps = AppBoxHTMLProps & As & CustomBoxProps & StyledSystemProps & ModifiedStyledSystemProps

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

export default AppBox as FC<AppBoxProps>
