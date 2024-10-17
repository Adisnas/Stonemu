import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="gray.100" py={4} textAlign="center">
      <Text>&copy; 2023 Stonemu. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;
