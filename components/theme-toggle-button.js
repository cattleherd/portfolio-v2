import { AnimatePresence, motion } from 'framer-motion' //allow animation of theme button (mode/light)
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
  const {toggleColorMode} = useColorMode() //hook cant be used directly in onclick, so its assigned to variable

  return (
    <AnimatePresence exitBeforeEnter initial={false} >
      <motion.div
        style={{display:'inline-block'}} //only way to implement component as inline block element, style motion.div element
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <IconButton
          aria-label="switch theme color"
          colorScheme={useColorModeValue('purple', 'yellow')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggle