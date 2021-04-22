import { describe, expect, it } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import Text from './Text'

describe('<Text />', () => {
  it('should render as a paragraph', () => {
    const { getByText } = render(<Text>Hi I am the content</Text>)
    expect(getByText('Hi I am the content').nodeName).toBe('P')
  })
})
