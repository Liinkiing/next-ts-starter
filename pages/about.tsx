import { NextPage } from 'next'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import Heading, { HeadingSize } from '~/ui/typography/Heading'
import AppBox from '~/ui/AppBox'
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
