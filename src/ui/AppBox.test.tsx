import { describe, expect, it } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import AppBox from './AppBox'

describe('<AppBox />', () => {
  const CONTENT = 'Hi I am the content'

  it('should render as a div', () => {
    const { getByText } = render(<AppBox>{CONTENT}</AppBox>)
    expect(getByText(CONTENT).nodeName).toBe('DIV')
  })

  it('should render as the specified node in the as prop', () => {
    const wrapper = render(<AppBox as="span">{CONTENT}</AppBox>)
    expect(wrapper.getByText(CONTENT).nodeName).toBe('SPAN')

    wrapper.rerender(<AppBox as="p">{CONTENT}</AppBox>)
    expect(wrapper.getByText(CONTENT).nodeName).toBe('P')
  })
})
