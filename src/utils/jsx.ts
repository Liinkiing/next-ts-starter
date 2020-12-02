import * as React from 'react'
import { ReactElement } from 'react'

function hasProps(jsx: React.ReactNode): jsx is ReactElement {
  return Object.prototype.hasOwnProperty.call(jsx, 'props')
}

function jsxInnerText(jsx: React.ReactNode): string {
  if (jsx === null || typeof jsx === 'boolean' || typeof jsx === 'undefined') {
    return ''
  }

  if (typeof jsx === 'number') {
    return jsx.toString()
  }

  if (typeof jsx === 'string') {
    return jsx
  }

  if (Array.isArray(jsx)) {
    return jsx.reduce<string>((acc, node) => acc + jsxInnerText(node), '')
  }

  if (hasProps(jsx) && Object.prototype.hasOwnProperty.call(jsx.props, 'children')) {
    return jsxInnerText(jsx.props.children)
  }

  return ''
}

export default jsxInnerText
