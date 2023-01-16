import {
  Container,
  Flex,
  Heading,
  Box,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from "next/link";
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggle from './theme-toggle-button'
import Logo from './logo'

//custom navbar link component
const LinkItem = ({ href, children }) => {
  return (
      //href is passed as prop to link object
      <Link p={3} href={href}>
        {children}
      </Link>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box //nav wrapper, sets bg, fixed, and width
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={1}
    >
      <Container //inner nav, container padding (left and right margins) 
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Logo />
        <Box //Left side of nav (link items)
          display={{ base: 'none', md: 'flex' }} paddingLeft={'50px'} paddingTop={'10px'}//hides link elements based on viewport
        >
          <Box margin={'12px'}><NextLink href="/" passHref>About</NextLink></Box>
          <Box margin={'12px'}><NextLink href="/Works" passHref>Works</NextLink></Box>
          <Box margin={'12px'}><NextLink href="/ContactForm" passHref>Contact</NextLink></Box>
          <Box margin={'12px'}><NextLink href="https://github.com/cattleherd" passHref>Github</NextLink></Box>
        </Box>
        
        <Box flex={1} align="right" marginTop={'15px'} //right side of nav (theme toggle and hamburger menu)
        >
          <ThemeToggle />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>{/* hamburger menu */}
            <Menu isLazy id="hamburger-menu">
              <MenuButton
                as={IconButton} //icon rendered as button
                icon={<HamburgerIcon />}
                variant="outline" //outline style for hamburger menu
                aria-label="Options" //accessibility 
              />
              <MenuList>
                  <MenuItem href='/'>About</MenuItem>
                  <MenuItem href='/'>Works</MenuItem>
                  <MenuItem href='/'>Contact</MenuItem>
                  <MenuItem href='/'>Github</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar