import React from 'react'
import Link from 'next/link'
import AppLink from '~/ui/typography/AppLink'
import AppBox from '~/ui/AppBox'

const AppNav: React.FC = () => (
  <AppBox as="nav" p={4}>
    <AppBox as="ul" display="flex">
      <AppBox as="li" marginRight={2}>
        <Link href="/">
          <AppLink>Home</AppLink>
        </Link>
      </AppBox>
      <AppBox as="li" marginRight={2}>
        <Link href="/about">
          <AppLink>About</AppLink>
        </Link>
      </AppBox>
    </AppBox>
  </AppBox>
)

export default AppNav
