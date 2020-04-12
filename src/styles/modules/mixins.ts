import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components'

export const breakpoint = (
  size: 'mobile' | 'tablet' | 'desktop',
  innerCss: FlattenSimpleInterpolation | TemplateStringsArray | CSSObject,
) => {
  let px
  switch (size) {
    case 'mobile':
      px = 320
      break
    case 'tablet':
      px = 768
      break
    case 'desktop':
      px = 992
      break
  }

  return css`
    @media screen and (min-width: ${px}px) {
      ${innerCss}
    }
  `
}

export const pxToRem = (px: number) => `${(px / 16).toFixed(3)}rem`
