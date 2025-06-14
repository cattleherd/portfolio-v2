import React from "react";
import {
  Box,
  Heading,
  Center,
  Image,
  Button,
  Text,
  useColorModeValue,
  Icon,
  Alert,
  AlertIcon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <VStack mb={10}>
      <Box
        id="logo"
        maxW="200px"
        minW="200px"
        h="200px"
        textAlign="center"
        mr={{ base: 0, md: 8 }}
        mb={{ base: 4, md: 0 }}
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mt={2} mb={4}>
          Afkaa
        </Heading>
        <Image
          src="./afkaa.png"
          h="120px"
          w="120px"
          alt="Afkaa logo"
          mx="auto"
          rounded="20px"
        />
      </Box>
      <Box
        p={4}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        rounded="xl"
        w="100%"
      >
        <Text
          fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
          lineHeight={{ base: "tall", md: "2xl" }}
        >
          Afkaa is a gamified language app built to help Somali youth in the
          diaspora to connect with their roots by learning and practicing Somali.
          With interactive lessons, quizzes, and listening exercises, Afkaa
          aims to make language learning fun!
        </Text>
      </Box>
    </VStack>
  );
};

const Body = () => {
  return (
    <VStack spacing={6} align="stretch" mb={8}>
      <Box>
        <Heading as="h3" size="md" mb={4}>
          Key Features
        </Heading>
        <Box
          p={4}
          bg={useColorModeValue("gray.100", "gray.700")}
          rounded="lg"
          shadow="md"
        >
          <Text fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>• Interactive Somali vocabulary quizzes</Text>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>• Audio pronunciation</Text>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>• Grammar mini-lessons with examples</Text>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>• Progress tracking & gamification</Text>
        </Box>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Current Plans
        </Heading>
        <Box
          p={4}
          bg={useColorModeValue("yellow.100", "yellow.900")}
          rounded="lg"
          shadow="md"
        >
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            lineHeight={{ base: "tall", md: "2xl" }}
          >
            We’re piloting Afkaa as a web demo with Somali youth in Toronto to collect
            feedback on our core modules. Next steps include refining our UI/UX
            based on real user data, expanding lesson sets, and preparing for a
            mobile app public launch by Q4!
          </Text>
        </Box>
      </Box>

      <Alert status="info" variant="subtle" rounded="md">
        <AlertIcon />
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Afkaa is under active development—some features are still WIP. For
          the full experience, please use a mobile device.
        </Text>
      </Alert>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          UX Case Study
        </Heading>
        <Box
          w="100%"
          h="0"
          pb="56.25%"
          position="relative"
          rounded="md"
          overflow="hidden"
          shadow="md"
        >
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://embed.figma.com/deck/enWFhmQpSNKXoTYCvuqpj9/Untitled?node-id=11-68&embed-host=share"
            allowFullScreen
          />
        </Box>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Try Afkaa
        </Heading>
        <Text
          mb={2}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          lineHeight={{ base: "tall", md: "2xl" }}
        >
          Experience Afkaa yourself!
        </Text>
        <Link
          href="https://afkaa.com"
          isExternal
          color="blue.500"
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
        >
          Visit Afkaa Demo <Icon as={ExternalLinkIcon} mx="2px" />
        </Link>
      </Box>
    </VStack>
  );
};

const Afkaa = () => {
  return (
    <Center>
      <Box w={{ base: "95%", sm: "80%", md: "60%" }} m="5%">
        <Header />
        <Body />
        <Center mt={6}>
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="blue"
            as="a"
            href="https://afkaa2-hjl4.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            fontSize={{ base: "md", md: "lg" }}
          >
            Launch Afkaa Demo
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Afkaa;
