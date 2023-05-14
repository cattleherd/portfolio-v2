import { Box, Circle, Heading, Center, position } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Image, Button, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Radsocial() {
  return (
    <div>
      <Center>
        <Box w={{ base: "100%", sm: "60%" }} ml="5%" mr="5%" mb="5%">
          <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
            <Box
              id="logo"
              style={{
                maxWidth: "200px",
                minWidth: "200px",
                height: "200px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Image
                src="/bonfire.png"
                height={"120px"}
                width="120px"
                alt="bonfire image"
                margin="0 auto"
              />
              <Heading
                as="h4"
                fontSize="35px"
                paddingLeft={"10px"}
                variant="page-title"
              >
                RadCamp
              </Heading>
            </Box>
            <Box mb="10%" p={"40px"}>
              <Box
                mt="20px"
                p={3}
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                css={{ backdropFilter: "blur(10px)" }}
                rounded="xl"
                textAlign={"center"}
              >
                <p>
                  RadCamp is a fullstack web app designed for people people who
                  like to explore new trails and campgrounds. It allows users to
                  upload a description and geopositioning of various places.
                  Users can also leave reviews as well. The app is powered with
                  mongodb, expressjs, and nodejs. The views are rendered with
                  the EJs templating engine.
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box pt={"10px"} marginX="5%">
              <Center>
                <Heading as="h4" pb="20px" fontSize="30px">
                  Tutorial
                </Heading>
              </Center>
              <video controls>
                <source
                  src="https://res.cloudinary.com/cattleherd/video/upload/v1674436979/radportfolioassets/radcamp_deloek.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
            <NextLink
              href="https://immense-island-92357.herokuapp.com/"
              passHref
            >
              <Center>
                <Button mt={"40px"} mb={'20px'} w="150px">
                  Demo
                </Button>
              </Center>
            </NextLink>
            <Center>
              <Text>(Demo takes a few moments to load)</Text>
            </Center>
          </Box>
        </Box>
      </Center>
    </div>
  );
}
