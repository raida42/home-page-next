import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="Podcast">
      <Container>
        <Title>
          Dokodemo Door<Badge>2021</Badge>
        </Title>
        <P>
          {' '}
          Dokodemo Door is a platform that provides some web VR services. Main
          is VR trip service. You can enjoy VR trip with subtitle displaying by
          using STT and translation API. So, user can enjoy without language
          barriers with Oculus Quest (VR Headset)
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WebSite</Meta>
            <Link href="https://dokodemodoors.com/">
              https://dokodemodoors.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS/Windows/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React + Typescript + Redux, NodeJS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
