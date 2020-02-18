import React from 'react'
import Link from 'next/link'

const AppNav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
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
