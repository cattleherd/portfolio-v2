import { Box, Circle, Heading, Center, position } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Image, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Radsocial() {
    const bg = useColorModeValue('white', 'blue')

  return (
    <div>
      <Center>
        <Box w={{ base: "100%", sm: "60%" }} ml="5%" mr="5%" mb="5%">
          <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
            <Box bg={bg}
              style={{
                maxWidth:'200px',
                minWidth:'200px',
                height:'200px',
                position:'relative',
                paddingRight:'20%',
                borderRadius:'50%',
                marginTop:'0%',
                marginLeft:'auto',
                marginRight:'auto'
              }}
            >
              <Heading
                as="h4"
                fontSize="35px"
                variant="page-title"
                position={"absolute"}
                left="-20%"
                top="30%"
              >
                RadSocial
              </Heading>
            </Box>
            <Box mb="10%" p={"40px"}>
              <Image
                minH={"150px"}
                src="radsocial.png"
                alt="social media app"
                borderRadius="xl"
              />
              <Box
                mt="20px"
                p={3}
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                css={{ backdropFilter: "blur(10px)" }}
                rounded="xl"
                textAlign={"center"}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  porttitor accumsan augue nec ultrices. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed porttitor accumsan
                  augue nec ultrices. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed porttitor accumsan augue nec ultrices.
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
                  src="https://res.cloudinary.com/cattleherd/video/upload/v1673560904/reactsocialmediaAssets/2023-01-09_10-42-00_hvv0cc.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
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
