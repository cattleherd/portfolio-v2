import React from "react";
import {
  Container,
  Heading,
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  VStack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import Transition from "../components/transition";
import NextLink from "next/link";

const WorkItem = ({ href, imageSrc, imageAlt, title, description, size }) => {
  // size = "featured" | "tile"
  const isFeatured = size === "featured";

  return (
    <Box
      maxW={isFeatured ? "40%" : "250px"}
      w="100%"
      mb={8}
      mx={isFeatured ? 0 : "auto"}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Transition>
        <NextLink href={href} passHref>
          <Box
            as="a"
            display="block"
            pos="relative"
            overflow="hidden"
            borderRadius="xl"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              objectFit="cover"
              w="100%"
              h={isFeatured ? { base: "200px", md: "400px" } : "150px"}
            />
          </Box>
        </NextLink>
      </Transition>
      <VStack spacing={2} mt={4} textAlign={isFeatured ? "left" : "center"}>
        <Heading size={isFeatured ? "xl" : "md"}>{title}</Heading>
        <Text fontSize={isFeatured ? "lg" : "sm"} color="gray.500">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const Works = () => {
  // Featured project
  const featured = {
    href: "/Afkaa",
    imageSrc: "afkaa.png",
    imageAlt: "Somali language learning app",
    title: "Afkaa",
    description: "An interactive and gamified way to learn Somali",
  };

  // Past works
  const pastWorks = [
    {
      href: "/Radsocial",
      imageSrc: "radsocial.png",
      imageAlt: "social media app",
      title: "RadSocial",
      description: "A social media web application",
    },
    {
      href: "/RadCamp",
      imageSrc: "campground.PNG",
      imageAlt: "campground app",
      title: "Radcamp",
      description: "A Campgrounds and trails review app",
    },
    {
      href: "https://stopwatch-eight-lovat.vercel.app/",
      imageSrc: "stopwatch.JPG",
      imageAlt: "stopwatch app",
      title: "Stopwatch Timer",
      description: "A Fully functional Stopwatch Timer",
    },
    {
      href: "https://mikes-portfolio-git-master-cattleherd.vercel.app/",
      imageSrc: "mike.PNG",
      imageAlt: "website commission",
      title: "Website Commission",
      description: "A portfolio website commissioned for a comedian",
    },
    {
      href: "https://chatbot-k772cyk3d-cattleherd.vercel.app/",
      imageSrc: "chatbot.JPG",
      imageAlt: "ai chatbot",
      title: "Simple AI Chatbot",
      description: "A friendly chat bot using OpenAI API and LangChain",
    },
    {
      href: "https://huggingface.co/spaces/cattleherd/deadornot",
      imageSrc: "deadornot.JPG",
      imageAlt: "plant health tool",
      title: "Plant Health Tool",
      description:
        "A simple deep-learning model to distinguish between dead and healthy plants",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      {/* Featured */}
      <Box mb={12}>
        <Heading as="h3" size="lg" mb={6}>
          Featured Project
        </Heading>
        <Center>
          {" "}
          <WorkItem {...featured} size="featured" />
        </Center>
      </Box>

      {/* Past Works */}
      <Box>
        <Heading as="h3" size="lg" mb={6}>
          Past Works
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={8}
          justifyItems="center"
        >
          {pastWorks.map((item, idx) => (
            <GridItem key={idx}>
              <WorkItem {...item} size="tile" />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Works;
