import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flex,
  FlexProps,
  grid,
  GridProps,
  border,
  BorderProps,
} from 'styled-system'

type Props = ColorProps & SpaceProps & LayoutProps & FlexProps & GridProps & BorderProps

const Box = styled.div<Props>`
  ${color};
  ${space};
  ${layout};
  ${flex};
  ${grid};
  ${border};
`

export default Box
