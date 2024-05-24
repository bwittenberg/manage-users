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
                    This app simulates a user management dashboard. Watch a
                    quick{' '}
                    <Link
                      href="https://drive.google.com/file/d/1JXz_B3mBHBQVIIGA-Is1ke-XObZhjBA1/view?usp=sharing"
                      target="_blank"
                    >
                      2 minute video
                    </Link>{' '}
                    for an overview of the features.
                  </Text>
                </Section>
                <Section size="1">
                  <Text as="p">
                    For details about the implementation, including a list of
                    features and TODOs, check out the{' '}
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
                    To learn more about the developer, visit{' '}
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
