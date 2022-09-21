import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Medias = styled.div`
ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
  
  ul li {
    list-style: none;
  }
  
  ul li a {
    position: relative;
    width:60px;
    height:60px;
    display:block;
    text-align:center;
    margin:0 10px;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
    text-decoration:none;
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
    background: linear-gradient(0deg, #ddd, #fff);

    transition: .5s;
  }

  n-items: center;
  }
  
  ul li a:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    text-decoration:none;
  }
  
  ul li a .fab {
    widht: 100%;
    height:100%;
    display:block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: calc(60px - 12px);
    font-size:24px;
    color: #262626;
    transition: .5s;
  }
  
  ul li:nth-child(1) a:hover .fab {
    color: #0a0a0a;
  }
  
  ul li:nth-child(2) a:hover .fab {
    color: #00aced;
  }
  
  ul li:nth-child(3) a:hover .fab {
    color: #007bb6;
  }

  ul li:nth-child(3) a:hover .fab {
    color: #007bb6;
  }
};
`

const MediasFooter = () => {

  return (
    <Box align="center">
      <Medias>
      <ul>
        <li>
          <a href="https://github.com/raida42" target="_blank">
            <i class="fab fa-github" aria-hidden="true" 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Image src="/images/github_icon.png" w="24px" h="24px" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Raida042" target="_blank">
            <i class="fab fa-twitter" aria-hidden="true"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Image src="/images/twitter_icon.png" w="24px" h="24px" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryusuke-aida-768950232/" target="_blank">
            <i class="fab fa-linkedin" aria-hidden="true"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Image src="/images/linkedin_icon.png" w="26px"h="26px" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/show/76EmlqhHCLgW3gXJyXwnO8?si=e7a922a77f9f4a3a" target="_blank">
            <i class="fab fa-linkedin" aria-hidden="true"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Image src="/images/spotify_icon.png" w="26px"h="26px" />
            </i>
          </a>
        </li>
      </ul>
      </Medias>
    </Box>
  )

}

export default MediasFooter