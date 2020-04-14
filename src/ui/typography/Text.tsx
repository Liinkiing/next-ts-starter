import React from 'react'
import AppBox, { AppBoxProps, LineHeight } from '~/ui/AppBox'

const Text = React.forwardRef<any, AppBoxProps>((props, ref) => {
  return <AppBox ref={ref} as="p" fontFamily="body" lineHeight={LineHeight.Base} {...props} />
})

Text.displayName = 'Text'

export default Text
