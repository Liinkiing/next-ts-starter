import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

const AppNav: NextPage = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default AppNav
