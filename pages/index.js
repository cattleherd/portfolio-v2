import NextLink from "next/link"; // Import for client-side navigation
import { Suspense } from "react"; // For handling asynchronous components
import {
  Box, // Chakra UI's basic building block
  Container, // Provides a centered content area
  useColorModeValue, // Helper to get values based on color mode
  Heading, // For titles and headings
  chakra, // Extend Chakra UI components
  Image, // Display images
  Button, // Interactive buttons
  Text, // Text content
  Flex, // Flexible layout container
  VStack, // Vertical stack layout
  HStack, // Horizontal stack layout
  Icon, // Display icons
  useBreakpointValue, // Get values based on screen size
} from "@chakra-ui/react"; // Import Chakra UI components
import { Canvas } from "@react-three/fiber"; // For 3D rendering
import { useSplashScreen } from "../context/SplashScreenContext"; // Custom context for splash screen
import Transition from "../components/transition"; // Transition component
import Splashscreen from "../components/Splashscreen.client"; // Splash screen component
import { Model } from "../components/model"; // 3D model component
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social media icons

// Custom profile image component
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

// Component for social media icons
const SocialIcon = ({ icon, href }) => (
  <NextLink href={href} passHref>
    <Icon
      as={icon}
      w={6}
      h={6}
      _hover={{ color: "teal.500", transform: "scale(1.1)" }} // Hover effect
      transition="all 0.3s" // Smooth transition
    />
  </NextLink>
);

// Bio section component
const Bio = () => (
  <Box
    borderRadius="lg" // Rounded corners
    p={6} // Padding
    bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.300")} // Background color based on color mode
    boxShadow="lg" // Box shadow
    css={{ backdropFilter: "blur(10px)" }} // Blur effect
    width={{ base: "100%", md: "80%" }} // Responsive width
    height={{ base: "100%", md: "80%" }} // Responsive width
  >
    <Heading as="h3" size="lg" mb={4}>
      About Me
    </Heading>
    <Text fontSize="md" lineHeight="tall">
      Hello, I'm Radwan Ahmed, a 4th-year Computer Science student at Thompson
      Rivers University. My passion lies in full stack development, where I
      excel in creating seamless digital solutions. I'm fascinated by the
      intersection of design and technology, and I love building experiences
      that resonate with users. From wireframes to fully-functional
      applications, I specialize in creating comprehensive solutions. Driven by
      continuous exploration of technological advancements and web development
      trends, I aim to innovate and make meaningful contributions to real-world
      problems.
    </Text>
  </Box>
);

// Portfolio button component with transition
const PortfolioButton = () => (
  <Transition>
    <NextLink href="/Works" passHref>
      <Button
        colorScheme="teal" // Teal color scheme
        size="lg" // Large size
        mt={8} // Margin top
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }} // Hover effect
        transition="all 0.3s" // Smooth transition
      >
        View My Portfolio
      </Button>
    </NextLink>
  </Transition>
);

// Main home page component
export default function Home() {
  const { showSplashScreen, setShowSplashScreen } = useSplashScreen(); // Get splash screen context
  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if screen is mobile

  return (
    <>
      {/* Conditionally render splash screen */}
      {showSplashScreen && (
        <Splashscreen onShown={() => setShowSplashScreen(false)} />
      )}

      <Container maxW="container.xl" py={10}>
        {" "}
        {/* Main content container */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Flex container for responsive layout */}
          <VStack align="start" spacing={6} flex={1} mb={{ base: 10, md: 0 }}>
            {/* Left column content */}
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
              {" "}
              {/* Social media icons */}
              <SocialIcon
                icon={FaGithub}
                href="https://github.com/yourusername"
              />
              <SocialIcon
                icon={FaLinkedin}
                href="https://linkedin.com/in/yourusername"
              />
              <SocialIcon
                icon={FaEnvelope}
                href="mailto:your.email@example.com"
              />
            </HStack>
            <PortfolioButton /> {/* Portfolio button */}
          </VStack>

          {/* Right column content (3D model or profile image) */}
          <Box
            width={{ base: "100%", md: "300px" }} // Responsive width
            height={{ base: "300px", md: "400px" }} // Responsive height
            bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")} // Background color
            borderRadius="full" // Rounded corners
            overflow="hidden" // Hide overflowing content
            boxShadow="xl" // Box shadow
            mb={{ base: 10, md: 0 }} // Responsive margin bottom
          >
            {isMobile ? ( // Conditionally render based on screen size
              <ProfileImage
                src="/Pinpoint_LT_9594.jpg"
                alt="Radwan Ahmed"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            ) : (
              <Canvas>
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </Canvas>
            )}
          </Box>
        </Flex>
        {/* Bio section */}
        <Flex mt={16} justifyContent={"center"}>
          <Bio />
        </Flex>
      </Container>
    </>
  );
}
