import { Box, Circle, Heading, Center, position } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Image, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Pokedex() {
  return (
    <div>
      <Center>
        <Box w={{ base: "100%", md: "80%" }}>
          <Heading
            as="h4"
            fontSize="35px"
            paddingLeft={"10px"}
            variant="page-title"
            textAlign={'center'}
          >
            Pokedex
          </Heading>
          <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }} p='40px'>
            <Image
              src="/pokedex1.PNG"
              height={{ base: '80%', lg:'50%'}}
              width={{ base: '80%', lg:'50%'}}
              alt="image of pokemon app"
              margin="0 auto"
              mt={"20px"}
            />
            <Box mb="10%" ml={'20px'}>
              <Box
                mt="20px"
                p={3}
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                css={{ backdropFilter: "blur(10px)" }}
                rounded="xl"
                textAlign={"center"}
              >
                <p>
                  Pokedex is a pokemon catalogue web application featuring detailed stats of 600 pokemon. This web app was built using reactjs and bootstrap.
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <NextLink href="https://rad-social.herokuapp.com" passHref>
              <Center>
                <Button mt={"40px"} mb={"40px"} w="150px">
                  Demo
                </Button>
              </Center>
            </NextLink>
          </Box>
        </Box>
      </Center>
    </div>
  );
}
