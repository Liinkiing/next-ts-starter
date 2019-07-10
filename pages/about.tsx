import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'

const AboutInner = styled.div``

const About: NextPage = () => (
  <AboutInner>
    <AppHead title="About" />
    <p>Hello from about</p>
  </AboutInner>
)

export default About
