import Image from "next/image";
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import styled from "@emotion/styled";


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-10deg);
  }
`

const Logo = () => {
  const topPageImg = `/images/rocket1.png`;

  return (
    <Link href="/">
      {/* <a> */}
        <LogoBox>
          <Image src={topPageImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Ryusuke Aida
          </Text>
        </LogoBox>
      {/* </a> */}
    </Link>
  )
}

export default Logo;