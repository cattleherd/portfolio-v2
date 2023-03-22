import { Box, Circle, Heading, Center, position } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Image, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Radsocial() {
  const bg = useColorModeValue("aquamarine", "#004233");

  return (
    <div>
      <Center>
        <Box w={{ base: "100%", sm: "60%" }} ml="5%" mr="5%" mb="5%">
          <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
            <Box
              bg={bg}
              style={{
                maxWidth: "200px",
                minWidth: "200px",
                height: "200px",
                position: "relative",
                paddingRight: "20%",
                borderRadius: "50%",
                marginTop: "0%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Heading
                as="h4"
                fontSize="35px"
                variant="page-title"
                position={"absolute"}
                left="-20%"
                top="30%"
                color={useColorModeValue("#004233", "aquamarine")}
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
                textAlign={"left"}
              >
                <p>
                  RadSocial is a social networking app that involves features
                  like sharing posts, a feed of friend&apos;s posts (timeline),
                  and a live messaging feature. The app is powered with react,
                  mongodb, expressjs and nodejs.
                </p>
              </Box>
            </Box>
          </Box>
          <Box marginBottom={'120px'} height={"500px"} width="full">
            <Center>
              <Heading as="h4" pb="20px" fontSize="30px">
                UX Case Study
              </Heading>
            </Center>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRrwwSdLNlm1tDMokEtG_KiRqDmhmnT_eabe1Ndy46CLKdtzjTj2FBPkTv4ydTGWp-OBdw6dJVmScAI/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
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
                  src="https://res.cloudinary.com/cattleherd/video/upload/v1679495269/radportfolioassets/2023-03-22_10-13-26_l3m070.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
            <NextLink href="https://rad-social.herokuapp.com" passHref>
              <Center>
                <Button
                  bg={useColorModeValue("aquamarine", "#004233")}
                  color={useColorModeValue("#004233", "aquamarine")}
                  mt={"40px"}
                  mb={"40px"}
                  w="150px"
                >
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
