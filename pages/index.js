import NextLink from "next/link"; //Import NextLink for client-side navigation
import { Suspense } from "react"; //Import Suspense for handling asynchronous components
import {
  Box,
  Container,
  useColorModeValue,
  Heading,
  chakra,
  Image,
  Button,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber"; //Import Canvas for 3D rendering using Three.js
import { useSplashScreen } from "../context/SplashScreenContext"; //Import custom context for splash screen management
import Transition from "../components/transition"; //Import custom transition component
import Splashscreen from "../components/Splashscreen.client"; //Import splash screen component (client-side only)
import { Model } from "../components/model"; //Import 3D model component
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; //Import social media icons
import { Parallax } from "react-scroll-parallax"; //Import parallax scrolling library

//Create a custom Chakra UI image component with prop forwarding
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

//Component for rendering social media icons with links
const SocialIcon = ({ icon, href }) => (
  <NextLink href={href} passHref>
    <Icon
      as={icon}
      w={6}
      h={6}
      _hover={{ color: "teal.500", transform: "scale(1.1)" }}
      transition="all 0.3s"
    />
  </NextLink>
);

//Component for rendering the bio section
const Bio = () => (
  <Box
    borderRadius="lg"
    p={6}
    bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.300")}
    boxShadow="lg"
    css={{ backdropFilter: "blur(10px)" }}
    width={{ base: "90%", md: "70%", lg: "60%" }}
    height={{ base: "100%", md: "80%" }}
  >
    <Heading as="h3" size="lg" mb={4}>
      About Me
    </Heading>
    <Text fontSize="md" lineHeight="tall">
      Hello, I&apos;m Radwan Ahmed, a 4th-year Computer Science student at
      Thompson Rivers University. My passion lies in full-stack development,
      where I excel in creating seamless digital solutions. I&apos;m fascinated
      by the intersection of design and technology, and I love building
      experiences that resonate with users. From wireframes to fully-functional
      applications, I specialize in creating comprehensive solutions. Driven by
      continuous exploration of technological advancements and web development
      trends, I aim to innovate and make meaningful contributions to solving
      real-world problems.
    </Text>
  </Box>
);

//Component for rendering the portfolio button with transition
const PortfolioButton = () => (
  <Transition>
    <NextLink href="/Works" passHref>
      <Button
        colorScheme="teal"
        size="lg"
        mt={8}
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
        transition="all 0.3s"
      >
        View My Portfolio
      </Button>
    </NextLink>
  </Transition>
);

//Main functional component for the home page
export default function Home() {
  const { showSplashScreen, setShowSplashScreen } = useSplashScreen(); //Get splash screen state and setter from context
  const isMobile = useBreakpointValue({ base: true, md: false }); //Check if the screen is mobile

  return (
    <>
      {showSplashScreen && ( //Conditionally render splash screen if it's showing
        <Splashscreen onShown={() => setShowSplashScreen(false)} />
      )}

      <Container maxW="container.xl" py={10} mb={"10%"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <VStack align="start" spacing={6} flex={1} mb={{ base: 10, md: 0 }}>
            <Heading as="h1" size="2xl" fontWeight="bold">
              Radwan Ahmed
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              FullStack Developer | CS Student
            </Text>
            <HStack spacing={4}>
              <SocialIcon
                icon={FaGithub}
                href="https://github.com/cattleherd/"
              />
              <SocialIcon
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/radwan-ahmed-2267b8224/"
              />
              <SocialIcon
                icon={FaEnvelope}
                href="mailto:radwan.hussein@protonmail.com"
              />
            </HStack>
            <PortfolioButton />
          </VStack>
          {!isMobile && (
            <Box
              width={{ base: "100%", md: "300px" }}
              height={{ base: "300px", md: "400px" }}
              borderRadius="full"
              overflow="hidden"
              boxShadow="xl"
              mb={{ base: 10, md: 0 }}
            >
              <Canvas>
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </Canvas>
            </Box>
          )}
        </Flex>

        <Flex mt={16} justifyContent="center">
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="full"
            boxShadow="xl"
            width={{ base: "100%", md: "70%", lg: "60%" }}
          >
            <AspectRatio ratio={16 / 9}>
              <Parallax translateY={["-20%", "20%"]}>
                <Box width="100%" height="120%" position="absolute" top="-10%">
                  <Image
                    src="/Pinpoint_LT_9594.jpg"
                    alt="Radwan Ahmed"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Parallax>
            </AspectRatio>
          </Box>
        </Flex>

        <Flex mt={16} justifyContent="center">
          <Bio />
        </Flex>
      </Container>
    </>
  );
}
