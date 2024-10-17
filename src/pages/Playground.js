import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import GameArea from '../components/GameArea';

function Playground() {
  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <Heading as="h2" size="xl" mb={6}>Playground</Heading>
      <GameArea />
    </Box>
  );
}

export default Playground;
