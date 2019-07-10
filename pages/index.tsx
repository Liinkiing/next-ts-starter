import Link from 'next/link'
import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'

const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <AppHead title="Homepage" />
    <p>Hello from home</p>
  </IndexInner>
)

export default Index
