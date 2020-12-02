import * as React from 'react'
import AppBox, { AppBoxProps, PolymorphicComponent } from '~/ui/AppBox'
import { GridProps } from 'styled-system'

type AutoFillFitOptions = {
  min: string
  max: string
}

export interface GridOptions {
  templateColumns?: GridProps['gridTemplateColumns']
  gap?: GridProps['gridGap']
  rowGap?: GridProps['gridRowGap']
  columnGap?: GridProps['gridColumnGap']
  autoFlow?: GridProps['gridAutoFlow']
  autoRows?: GridProps['gridAutoRows']
  autoColumns?: GridProps['gridAutoColumns']
  templateRows?: GridProps['gridTemplateRows']
  templateAreas?: GridProps['gridTemplateAreas']
  area?: GridProps['gridArea']
  column?: GridProps['gridColumn']
  row?: GridProps['gridRow']
  autoFit?: AutoFillFitOptions | boolean
  autoFill?: AutoFillFitOptions | boolean
}

type Props = Omit<
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

const Grid = React.forwardRef<HTMLElement, Props>((props, ref) => {
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

export default Grid as PolymorphicComponent<Props>
