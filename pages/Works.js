import { Container, Heading, Box, Image, Text, Flex } from "@chakra-ui/react";
import Transition from "../components/transition";
import NextLink from "next/link";

const WorkItem = ({ href, imageSrc, imageAlt, title, description }) => (
  <Box
    className="workitem"
    width={{ base: "90%", md: "250px" }}
    mb={{ base: 8, md: 10 }}
    mx="5%"
    transition="transform 0.3s"
    _hover={{ transform: "scale(1.05)" }}
  >
    <Transition>
      <NextLink href={href} passHref>
        <Image
          src={imageSrc}
          alt={imageAlt}
          borderRadius="xl"
          objectFit="cover"
          w="100%"
          h={{ base: "200px", md: "150px" }}
          _hover={{
            cursor: "pointer",
          }}
        />
      </NextLink>
    </Transition>
    <Heading size="md" mt={4} mb={2} textAlign="center">
      {title}
    </Heading>
    <Text textAlign="center">{description}</Text>
  </Box>
);

const WorksSection = ({ title, items }) => (
  <Box mt={10}>
    <Heading as="h3" size="lg" mb={8}>
      {title}
    </Heading>
    <Flex
      className="works"
      flexDirection={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justifyContent={{ base: "flex-start", md: "center" }}
      alignItems="center"
    >
      {items.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </Flex>
  </Box>
);

const Works = () => {
  const webDevelopmentItems = [
    {
      href: "/Afkaa",
      imageSrc: "afkaa.png",
      imageAlt: "Somali language learning app",
      title: "Afkaa",
      description: "An interactive and gamified way to learn Somali",
    },
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
  ];

  const machineLearningItems = [
    {
      href: "https://huggingface.co/spaces/cattleherd/deadornot",
      imageSrc: "deadornot.JPG",
      imageAlt: "ai chatbot",
      title: "Plant health tool",
      description:
        "A simple deep learning model to distinguish between dead and healthy plants",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <WorksSection title="Web Development" items={webDevelopmentItems} />
      <WorksSection title="Machine Learning" items={machineLearningItems} />
    </Container>
  );
};

export default Works;
