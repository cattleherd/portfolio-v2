import {
  Container,
  Heading,
  Box,
  Image,
  Center,
  Wrap,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import Transition from "../components/transition";
import NextLink from "next/link";

const Works = () => (
  <Box w="60%" marginX={"auto"} mb="10%">
    <Heading as="h3" size={"lg"} variant="page-title">
      Web Development
    </Heading>
    <Center>
      <div className="works">
        <Box className="workitem" width="250px" h="250px">
          <Box>
            <Transition>
              <NextLink href="/Radsocial" passHref>
                <Image
                  minH={"150px"}
                  src="radsocial.png"
                  alt="social media app"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mt={"15px"} mb={"15px"} textAlign="center">
              RadSocial
            </Heading>
            <Text display={"flex"} justifyContent={"center"}>
              A social media web application.
            </Text>
          </Box>
        </Box>
        <Box className="workitem" w="250px" h="250px" mb="10%">
          <Box>
            <Transition>
              <NextLink href="/RadCamp">
                <Image
                  minH={"150px"}
                  src="campground.PNG"
                  alt="campground app"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mt={"15px"} mb={"15px"} textAlign="center">
              Radcamp
            </Heading>
            <Text display={"flex"} justifyContent={"center"}>
              A Campgrounds and trails review app
            </Text>
          </Box>
        </Box>
                <Box className="workitem" w="250px" h="250px" mb="10%">
          <Box>
            <Transition>
              <NextLink href="https://stopwatch-eight-lovat.vercel.app/">
                <Image
                  maxH={"150px"}
                  w="100%"
                  src="stopwatch.JPG"
                  object-fit="cover"
                  alt="pokemon app"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mb={"15px"} mt={"15px"} textAlign="center">
              Stopwatch Timer
            </Heading>
            <Text>A Fully functional Stopwatch Timer</Text>
          </Box>
        </Box>
        <Box className="workitem" w="250px" h="250px" mb="10%">
          <Box>
            <Transition>
              <NextLink href="https://michaelkmcauley.com/">
                <Image
                  maxH={"150px"}
                  w="100%"
                  src="mike.PNG"
                  objectFit={"cover"}
                  alt="website commision"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mb={"15px"} mt={"15px"} textAlign="center">
              Website Commission
            </Heading>
            <Text>
              I was commissioned to make a portfolio website for a comedian.
            </Text>
          </Box>
        </Box>
        <Box className="workitem" w="250px" h="250px" mb="10%">
          <Box>
            <Transition>
              <NextLink href="https://chatbot-k772cyk3d-cattleherd.vercel.app/">
                <Image
                  maxH={"150px"}
                  w="100%"
                  src="chatbot.JPG"
                  objectFit={"cover"}
                  alt="ai chatbot"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mb={"15px"} mt={"15px"} textAlign="center">
              Simple AI chatbot
            </Heading>
            <Text>
              I made a simple friendly chat bot using openai API and langchain
            </Text>
          </Box>
        </Box>
      </div>
    </Center>
    <Heading as="h3" size={"lg"} mt='10%' variant="page-title">
      Machine Learning
    </Heading>
    <Center>
      <div className="works">
        <Box className="workitem" w="250px" h="250px" mb="10%">
          <Box>
            <Transition>
              <NextLink href="https://huggingface.co/spaces/cattleherd/deadornot">
                <Image
                  maxH={"150px"}
                  w="100%"
                  src="deadornot.JPG"
                  objectFit={"cover"}
                  alt="ai chatbot"
                  borderRadius="xl"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </NextLink>
            </Transition>
            <Heading size={"md"} mb={"15px"} mt={"15px"} textAlign="center">
              Plant health tool
            </Heading>
            <Text>
              I made a simple deep learning model trained from 80 images to distinguish between a dead plant or healthy plant
            </Text>
          </Box>
        </Box>
      </div>
    </Center>
  </Box>
);

export default Works;
