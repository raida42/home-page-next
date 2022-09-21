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
          Podcast <Badge>2021</Badge>
        </Title>
        <P>
          I deliver the skills and web engineer knowledge I have learned in audio form.
          I'm planing to make new corner of the show to talk to 42Tokyo student.
          Audio distribution content is growing in Japan. so that I will make this channel more popular.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WebSite</Meta>
            <Link href="https://anchor.fm/raida42">
              Podcast Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Spotify/Podcast App(iOS)/Google Podcast/Browser</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Stack</Meta>
            <span>React + Typescript, NodeJS, </span>
          </ListItem> */}
        </List>
      </Container>
    </Layout>
  )
}

export default Work
