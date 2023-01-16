//set custom default theme
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

//set default bg color of body
const styles = {
    global: props => ({
      body: {
        bg: mode('#f0e7db', '#202023')(props) //dark mode and light mode colors passed to useColorMode
      }
    })
  }

//dark mode and light mode config
  const config = {
    initialColorMode: 'dark', //initial color mode, can be light or dark
    useSystemColorMode: true //update color mode based on system prefs
  }

  const theme = extendTheme({ styles, config})

  export default theme