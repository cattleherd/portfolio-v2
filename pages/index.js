// File: pages/index.js or app/page.js (depending on your Next.js version)

import NextLink from "next/link"; // For client-side navigation between pages
import { Suspense } from "react"; // For lazily loading components
import {
  // Chakra UI components for layout, styling, and interactivity
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

// For creating 3D graphics
import { Canvas } from "@react-three/fiber";

// Custom context for managing splash screen visibility
import { useSplashScreen } from "../context/SplashScreenContext";

// Custom component for page transitions
import Transition from "../components/transition";

// Client-side component for the splash screen
import Splashscreen from "../components/Splashscreen.client";

// 3D model component
import { Model } from "../components/model";

// Social media icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// For creating parallax scrolling effects
import { Parallax } from "react-scroll-parallax";

// Chakra UI wrapper for the Image component with prop forwarding
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

// Component for rendering social media icons with links
const SocialIcon = ({ icon, href }) => (
  <NextLink href={href} passHref>
    {/* NextLink for client-side navigation */}
    <Icon
      as={icon} // The specific icon component (e.g., FaGithub)
      w={6} // Width
      h={6} // Height
      _hover={{ color: "teal.500", transform: "scale(1.1)" }} // Hover styles
      transition="all 0.3s" // Smooth transition on hover
    />
  </NextLink>
);

// Component for displaying the bio section
const Bio = () => (
  <Box
    borderRadius="lg"
    p={6}
    bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.300")} // Background color based on color mode
    boxShadow="lg"
    css={{ backdropFilter: "blur(10px)" }} // Apply backdrop blur effect
    width={{ base: "90%", md: "70%", lg: "60%" }} // Responsive width
    height={{ base: "100%", md: "80%" }} // Responsive height
  >
    <Heading as="h3" size="lg" mb={4}>
      About Me
    </Heading>
    <Text fontSize="md" lineHeight="tall">
      {/* Bio content */}
      Hello, I am Radwan Ahmed, a 4th-year Computer Science student at Thompson
      Rivers University. My passion lies in full-stack development, where I
      excel in creating seamless digital solutions. I am fascinated by the
      intersection of design and technology, and I love building experiences
      that resonate with users. From wireframes to fully-functional
      applications, I specialize in creating comprehensive solutions. Driven by
      continuous exploration of technological advancements and web development
      trends, I aim to innovate and make meaningful contributions to solving
      real-world problems.
    </Text>
  </Box>
);

// Button component for navigating to the portfolio page
const PortfolioButton = () => (
  <Transition>
    {" "}
    {/* Wrap the button in a Transition component for animation */}
    <NextLink href="/Works" passHref>
      <Button
        colorScheme="teal"
        size="lg"
        mt={8}
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }} // Hover styles
        transition="all 0.3s"
      >
        View My Portfolio
      </Button>
    </NextLink>
  </Transition>
);

// Main component for the home page
export default function Home() {
  const { showSplashScreen } = useSplashScreen(); // Get splash screen visibility from context
  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if the screen is mobile-sized

  return (
    <Container maxW="container.xl" py={10} mb={"10%"}>
      {showSplashScreen && <Splashscreen />}{" "}
      {/* Conditionally render the splash screen */}
      <Flex
        direction={{ base: "column", md: "row" }} // Responsive layout direction
        align="center"
        justify="space-between"
      >
        {/* Left column with profile information */}
        <VStack align="start" spacing={6} flex={1} mb={{ base: 10, md: 0 }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Radwan Ahmed
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.300")}>
            FullStack Developer | CS Student
          </Text>
          <HStack spacing={4}>
            {/* Social media icons */}
            <SocialIcon icon={FaGithub} href="https://github.com/cattleherd/" />
            <SocialIcon
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/radwan-ahmed-2267b8224/"
            />
            <SocialIcon
              icon={FaEnvelope}
              href="mailto:radwan.hussein@protonmail.com"
            />
          </HStack>
          <PortfolioButton /> {/* Button to view portfolio */}
        </VStack>

        {/* Right column with 3D model (only on larger screens) */}
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
                {" "}
                {/* Suspense for lazy loading the model */}
                <Model />
              </Suspense>
            </Canvas>
          </Box>
        )}
      </Flex>
      {/* Section with a parallax image */}
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
              {" "}
              {/* Parallax effect on vertical scroll */}
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
      {/* Bio section */}
      <Flex mt={16} justifyContent="center">
        <Bio />
      </Flex>
    </Container>
  );
}
