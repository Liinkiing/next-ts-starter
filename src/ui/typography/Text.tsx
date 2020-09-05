import React from 'react'
import AppBox, { AppBoxOwnProps, LineHeight, PolymorphicAppBox } from '~/ui/AppBox'

const Text = React.forwardRef<any, AppBoxOwnProps>((props, ref) => {
  return <AppBox ref={ref} as="p" fontFamily="body" lineHeight={LineHeight.Base} {...props} />
})

Text.displayName = 'Text'

export default Text as PolymorphicAppBox
