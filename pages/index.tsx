import { NextPage } from 'next'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'

const Index: NextPage = () => (
  <Page>
    <AppHead title="Homepage" />
    <p>Hello from home</p>
  </Page>
)

export default Index
