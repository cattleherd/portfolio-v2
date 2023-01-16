import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.45} fontSize="sm" mb={'30px'}>
      &copy; {new Date().getFullYear()} Radwan Ahmed All Rights Reserved.
    </Box>
  )
}

export default Footer