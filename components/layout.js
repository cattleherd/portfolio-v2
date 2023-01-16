//main layout of each page, boilerplate if you will that is shared between all pages
import Navbar from "./navbar.js";
import Head from "next/head";
import Footer from "./footer.js";

import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar />
      <Box as="main" pb={8}>
        {/*Box is like a div wrapper for chakraui */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Radwan's homepage" />
          <meta name="author" content="Radwan Ahmed" />
        </Head>
      </Box>
      <Box w='100%' pt={20}>{children}</Box>
      <Footer/>
    </>
  );
};

export default Layout;
