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
        maxWidth="200px"
        minWidth="200px"
        height="200px"
        textAlign="center"
        mr={{ base: 0, md: 8 }}
        mb={{ base: 4, md: 0 }}
      >
        <Heading as="h1" fontSize="35px" mt={2} mb={4}>
          Afkaa
        </Heading>
        <Image
          src="./afkaa.png"
          height="120px"
          width="120px"
          alt="Afkaa logo"
          margin="0 auto"
          rounded={"20px"}
        />
      </Box>
      <Box
        p={4}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        rounded="xl"
        flex={1}
      >
        <Text>
          I am developing Afkaa as a gamified educational app designed to help
          high school students in Somaliland prepare for the IELTS
          (International English Language Testing System) exam. My hope is to
          bridge the gap between local education and international opportunities
          by providing targeted English language practice for somali youth.
          Through interactive exercises, mock tests, and personalized feedback,
          Afkaa can hopefully equip students with the skills and confidence
          needed to excel in the IELTS, opening doors to international schools
          and universities. By focusing on this crucial aspect of academic
          advancement, Afkaa plays a vital role in empowering Somaliland&aposs
          youth to pursue global educational opportunities.
        </Text>
      </Box>
    </VStack>
  );
};

const Body = () => {
  return (
    <VStack spacing={6} align="stretch" mb={8}>
      <Box mb={4}>
        <Heading as="h3" size="md" mb={4}>
          Key Features
        </Heading>
        <Box
          p={4}
          bg={useColorModeValue("gray.100", "gray.700")}
          rounded="lg"
          shadow="md"
        >
          <Text>• Interactive vocabulary quizzes</Text>
          <Text>• Audio pronunciation guides</Text>
          <Text>• Progress tracking and gamification elements</Text>
          <Text>• Responsive design for mobile and desktop use</Text>
          <Text>• User authentication and profile management</Text>
        </Box>
      </Box>
      <Box>
        <Heading as="h3" size="md" mb={4}>
          Future Plans
        </Heading>
        <Box
          p={4}
          bg={useColorModeValue("yellow.100", "black")}
          rounded="lg"
          shadow="md"
        >
          <Text>
            Future plans for Afkaa include expanding its scope to help youth in
            Canada learn Somali as well, with the aim of preserving cultural
            heritage. This initiative will enable young Somali-Canadians to
            connect with their roots, strengthen their cultural identity, and
            maintain linguistic ties to their heritage. By offering a platform
            for Somali language learning, Afkaa seeks to bridge generational
            gaps and foster a sense of community among the Somali diaspora in
            Canada.
          </Text>
        </Box>
      </Box>
      <Alert status="info" variant="subtle" rounded="md">
        <AlertIcon />
        <Text>
          Afkaa is currently under development, so please note that many
          features may not yet function as intended. While this app is designed
          to be a mobile application, it is currently presented in a browser
          format for demonstration purposes. For the best experience, please
          view it on a phone.
        </Text>
      </Alert>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Try Afkaa
        </Heading>
        <Text mb={2}>
          Experience Afkaa firsthand! Visit our live demo to explore the
          features and start learning Somali today.
        </Text>
        <Link
          href="https://afkaa.com"
          isExternal
          color="blue.500"
          fontWeight="bold"
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
        <Center>
          <Button
            rightIcon={<Icon as={ExternalLinkIcon} />}
            colorScheme="blue"
            as="a"
            href="https://afkaa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Afkaa Demo
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Afkaa;
