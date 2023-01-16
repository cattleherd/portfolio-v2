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
  shouldForwardProp,
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
      <Box
        borderRadius="lg"
        mb={6}
        mt={10}
        mx={"auto"}
        p={4}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
      <Center display="flex" flexDirection={{ base: "column", sm: "row" }}>
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
            src="/profile.png"
            alt="Profile image"
            borderRadius="full"
            width="100%"
            height="100%"
          />
        </Box>
      </Center>
      <Box mt="30px">
        <Heading as="u" mb={"20px"}>
          Bio
        </Heading>
        <p>
          Proin eu elit auctor, vestibulum turpis sit amet, porttitor leo. Duis
          cursus est id auctor sollicitudin. Sed a semper urna. Praesent in
          purus in tortor fermentum pharetra vel a metus. Suspendisse pharetra
          interdum metus, egestas dapibus nunc varius vel. Pellentesque
          volutpat, mi in aliquet gravida, neque nulla eleifend ex, ut consequat
          libero lacus sit amet odio. Donec mi nulla, dignissim non lectus a,
          porttitor lobortis magna. In scelerisque gravida tincidunt.
        </p>
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
