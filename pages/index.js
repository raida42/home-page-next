import { ChevronRightIcon } from '@chakra-ui/icons'
import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import MediasFooter from '../components/social-media'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ryusuke Aida
          </Heading>
          <p>Junior Full-stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ryusuke.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ryusuke is a developer and podcaster. He's been learning engineering skills for one
          and half years since April 2021 in 42Tokyo which is the very unique,
          nonprofit tuition-free computer science school from Paris. When not
          online, he loves playing game especially Mario Karts. also loves
          sports such as Baseball, Basketball, Snowboarding etc. Currently, he's
          working on web VR trip service{' '}
          <a
            href="https://dokodemodoors.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Dokodemo Door</u>
          </a>
          {' '}
          as full-stack engineer and project manager.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portfolio</Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" >Bio</Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Singapore.
        </BioSection>
        <BioSection>
          <BioYear>2021.3</BioYear>
          Completed Bachelors degree in the Chuo.univ (中央大学理工学部物理学科学士)
        </BioSection>
        <BioSection>
          <BioYear>2021.4</BioYear>
          Passed Picsine (exam) and stared learning engineering skills in 42Tokyo. 
        </BioSection>
        <BioSection>
          <BioYear>2021.10</BioYear>
          Joined VoicePing.inc and stared my first career.
        </BioSection>
      </Section>
      <br/>
      <Section delay={0.3}>
      <Heading as="h3" variant="section-title" >Social Media</Heading>
        <MediasFooter />
      </Section>
    </Container>
  )
}

export default Page