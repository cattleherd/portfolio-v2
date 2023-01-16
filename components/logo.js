import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import profile from './icons/profile.png'

//style name in nav
const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  margin-left: 20px;
  padding-top:20px;
  vertical-align:top;
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <Name>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')} //define light and dark mode colors of the name text
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Radwan Ahmed
          </Text>
        </Name>
      </a>
    </Link>
  )
}

export default Logo