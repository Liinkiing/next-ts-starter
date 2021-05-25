import { forwardRef } from 'react'
import type { GridProps as StyledGridProps } from 'styled-system'

import AppBox, { AppBoxProps, PolymorphicComponent } from '~/ui/AppBox'

type AutoFillFitOptions = {
  min: string
  max: string
}

export interface GridOptions {
  templateColumns?: StyledGridProps['gridTemplateColumns']
  gap?: StyledGridProps['gridGap']
  rowGap?: StyledGridProps['gridRowGap']
  columnGap?: StyledGridProps['gridColumnGap']
  autoFlow?: StyledGridProps['gridAutoFlow']
  autoRows?: StyledGridProps['gridAutoRows']
  autoColumns?: StyledGridProps['gridAutoColumns']
  templateRows?: StyledGridProps['gridTemplateRows']
  templateAreas?: StyledGridProps['gridTemplateAreas']
  area?: StyledGridProps['gridArea']
  column?: StyledGridProps['gridColumn']
  row?: StyledGridProps['gridRow']
  autoFit?: AutoFillFitOptions | boolean
  autoFill?: AutoFillFitOptions | boolean
}

export type GridProps = Omit<
  AppBoxProps,
  | 'templateColumns'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
  | 'autoFlow'
  | 'autoRows'
  | 'autoColumns'
  | 'templateRows'
  | 'templateAreas'
  | 'area'
  | 'column'
  | 'row'
> &
  GridOptions

const Grid = forwardRef<HTMLElement, GridProps>((props, ref) => {
  const {
    templateColumns,
    gap,
    rowGap,
    columnGap,
    autoFlow,
    autoRows,
    autoColumns,
    templateRows,
    templateAreas,
    area,
    column,
    row,
    autoFit,
    autoFill,
    ...rest
  } = props
  const styles = {
    ...(autoFit &&
      typeof autoFit === 'boolean' &&
      autoFit === true && {
        gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
      }),
    ...(autoFit &&
      typeof autoFit === 'object' && {
        gridTemplateColumns: `repeat(auto-fit, minmax(${autoFit.min ?? '100px'}, ${autoFit.max ?? '1fr'}))`,
      }),
    ...(autoFill &&
      typeof autoFill === 'boolean' &&
      autoFill === true && {
        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
      }),
    ...(autoFill &&
      typeof autoFill === 'object' && {
        gridTemplateColumns: `repeat(auto-fill, minmax(${autoFill.min ?? '100px'}, ${autoFill.max ?? '1fr'}))`,
      }),
  }
  return (
    <AppBox
      display="grid"
      gridTemplateColumns={templateColumns}
      gridGap={gap}
      gridRowGap={rowGap}
      gridColumnGap={columnGap}
      gridAutoFlow={autoFlow}
      gridAutoRows={autoRows}
      gridAutoColumns={autoColumns}
      gridTemplateRows={templateRows}
      gridTemplateAreas={templateAreas}
      gridArea={area}
      gridColumn={column}
      gridRow={row}
      ref={ref}
      css={styles}
      {...rest}
    />
  )
})

Grid.displayName = 'Grid'

export default Grid as PolymorphicComponent<GridProps>
