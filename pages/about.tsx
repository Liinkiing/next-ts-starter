import type { NextPage } from 'next'

import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import AppBox from '~/ui/AppBox'
import Heading, { HeadingSize } from '~/ui/typography/Heading'
import Text from '~/ui/typography/Text'

const About: NextPage = () => (
  <Page>
    <AppHead title="About" />
    <Heading as="h1" size={HeadingSize.Xl}>
      About Page
    </Heading>
    <AppBox mt={2}>
      <Text>Hello from about page</Text>
    </AppBox>
  </Page>
)

export default About
