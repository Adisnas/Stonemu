import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Stonemu
      </Heading>
      <Text fontSize="xl" mb={6}>
        Get ready for an exciting journey filled with games, rewards, and community challenges!
      </Text>
      <Button as={RouterLink} to="/register" colorScheme="blue" size="lg">
        Get Started
      </Button>
    </Box>
  );
}

export default Home;
