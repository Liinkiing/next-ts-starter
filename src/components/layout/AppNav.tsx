import React from 'react'
import AppLink from '~/ui/typography/AppLink'
import AppBox from '~/ui/AppBox'

const AppNav: React.FC = () => (
  <AppBox as="nav" p={4}>
    <AppBox as="ul" display="flex">
      <AppBox as="li" marginRight={2}>
        <AppLink href="/">Home</AppLink>
      </AppBox>
      <AppBox as="li" marginRight={2}>
        <AppLink href="/about">About</AppLink>
      </AppBox>
    </AppBox>
  </AppBox>
)

export default AppNav
