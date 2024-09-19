import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme"; //custom theme
import Layout from "../components/layout.js"; //boilerplate code for all pages (navbar, footer, etc)
import Transition from "../components/transition";
import '../styles/transition.css'
import '../styles/global.css'
import { SplashScreenProvider } from "../context/SplashScreenContext.js";
import { ParallaxProvider } from 'react-scroll-parallax';

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <SplashScreenProvider>
          <Layout>
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </Layout>
        </SplashScreenProvider>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;