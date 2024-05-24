import * as Layout from 'components/Layout'
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text
} from '@radix-ui/themes'

export const Home = () => {
  return (
    <Layout.Root>
      <Layout.Nav />
      <Layout.Content>
        <Grid rows="1fr 6fr">
          <Box />
          <Flex style={{ justifySelf: 'center' }}>
            <Box maxWidth="400px" overflow="hidden">
              <Card size="1">
                <Section size="1">
                  <Heading>👋 Welcome!</Heading>
                </Section>
                <Section size="1">
                  <Text as="p">
                    Nice to meet you. I&apos;ve enjoyed building this app. It
                    relies on a few common javascript tools and libraries. For
                    all the details, including an over of the features, check
                    out the{' '}
                    <Link
                      href="https://github.com/bwittenberg/manage-users/blob/main/README.md"
                      target="_blank"
                    >
                      README on Github
                    </Link>
                    .
                  </Text>
                </Section>
                <Section size="1">
                  <Text as="p">
                    To learn more about the developer, check out{' '}
                    <Link
                      href="https://www.linkedin.com/in/benjamin-wittenberg/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                    .
                  </Text>
                </Section>
              </Card>
            </Box>
          </Flex>
        </Grid>
      </Layout.Content>
    </Layout.Root>
  )
}
