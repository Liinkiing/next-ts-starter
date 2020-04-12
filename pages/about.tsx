import { NextPage } from 'next'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'

const About: NextPage = () => (
  <Page>
    <AppHead title="About" />
    <p>Hello from about</p>
  </Page>
)

export default About
