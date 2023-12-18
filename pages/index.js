import NextLink from "next/link";
import { motion } from "framer-motion";
import Transition from "../components/transition";

import {
  Box,
  Container,
  useColorModeValue,
  Heading,
  chakra,
  Image,
  Center,
  Button,
  shouldForwardProp,Text
} from "@chakra-ui/react";
import Layout from "../components/layout";
import { Model } from "../components/model";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <Container>
      <Box
        height={"400px"}
        width={"300px"}
        bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.500")}
        mt={10}
        mx={"auto"}
        borderRadius="full"
      >
        <Canvas>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </Box>
      <Center display="flex" justifyContent={"space-between"}  flexDirection={{ base: "column", sm: "row" }}>
        <Box>
          <Heading as="h2" variant="page-title">
            Radwan Ahmed
          </Heading>
          <p>FullStack Developer</p>
        </Box>
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          minW="100px"
          mt="20px"
          ml={{ sm: "20px" }}
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src="/Pinpoint_LT_9594.jpg"
            alt="Profile image"
            borderRadius="full"
            width="100%"
            objectFit={"cover"}
            height="100%"
          />
        </Box>
      </Center>
      <Box mt="30px">
        <Heading as="u" mb={"20px"}>
          Bio
        </Heading>
        <Box borderRadius="lg"
        mb={6}
        mt={10}
        mx={"auto"}
        p={3}
        textAlign="left"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}>
                <Text fontSize={'lg'}>Hello, I am Radwan Ahmed, a third year Computer Science student at Thompson Rivers University. My passion lies in full stack development, where I excel in creating seamless digital solutions. I am deeply fascinated by the intersection of design, technology, and AI, and love building experiences that resonate with users. I specialize in creating comprehensive solutions from wireframes to fully-functional applications. My journey is fueled by a continuous exploration of technological advancements and web development trends, my aim is to continuiously innovate and make impactful and meaningful contributions.</Text>
    
        </Box>
      </Box>
      <Transition>
        <NextLink href="/Works" passHref>
          <Center>
            <Button mt={"40px"} mb={"40px"}>
              My portfolio
            </Button>
          </Center>
        </NextLink>
      </Transition>
    </Container>
  );
}
