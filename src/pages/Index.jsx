import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Container, VStack, Text, Box, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          <Text as="span" fontWeight="bold">
            John Doe
          </Text>
        </Heading>
        <Text fontSize="lg">3D Artist & Web Developer</Text>
        <Box width="100%" height="400px">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <Model path="GPTENG:get_model('3d model of a computer')" />
            <OrbitControls />
          </Canvas>
        </Box>
        <VStack spacing={4}>
          <Text fontSize="md">Connect with me:</Text>
          <Box>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" m={2} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={2} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" m={2} />
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
