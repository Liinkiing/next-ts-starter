import type { NextPage } from 'next'

import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import AppBox from '~/ui/AppBox'
import Heading from '~/ui/typography/Heading'
import Text from '~/ui/typography/Text'

const Index: NextPage = () => (
  <Page>
    <AppHead title="Homepage" />
    <Heading as="h1">Index Page</Heading>
    <AppBox mt={2}>
      <Text>Hello from index page</Text>
    </AppBox>
  </Page>
)

export default Index
