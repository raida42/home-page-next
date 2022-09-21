import { Container,Heading, SimpleGrid, Divider,  } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbnailDokodemoDoor from "../public/images/dokodemodoor.png"
import thumbnailPodcast from "../public/images/works/podcast-thumbnail.png"
// Incoming Works thumbnail and content here
// import  from "../public/images/works/"

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="dokodemodoor"
            title="Dokodemo Door"
            thumbnail={thumbnailDokodemoDoor}
          >
            Dokodemo Door is a platform that provides some web VR services.
            Main is VR trip service. You can enjoy VR trip with subtitle displaying by using STT and translation API. So, user can enjoy without language barriers.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="podcast"
            title="Podcast"
            thumbnail={thumbnailPodcast}
          >
            Streaming about knowledge of Internet/Programing Language/Start-Up
            work/42Tokyo/etc
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works