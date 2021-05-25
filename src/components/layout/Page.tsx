import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { createElement } from 'react'
import styled from 'styled-components'

import { DefaultRouterPageVariants } from '~/common/framer'
import { BREAKPOINTS } from '~/styles/modules/variables'

interface Props {
  readonly as?: string
  readonly noDefaultTransition?: boolean
}

const PageInner = styled(motion.div)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  transform-origin: left center;
  max-width: 90vw;
  margin: 0 auto;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    min-width: 70vw;
  }
`

const Page: NextPage<Props> = ({ children, as = 'div', noDefaultTransition = false, ...rest }) =>
  createElement(
    // @ts-ignore
    motion[as],
    {
      exit: 'exit',
      initial: 'exit',
      animate: 'enter',
      className: 'router__wrapper',
    },
    <PageInner {...rest} {...(noDefaultTransition ? {} : { variants: DefaultRouterPageVariants })}>
      {children}
    </PageInner>,
  )

export default Page
