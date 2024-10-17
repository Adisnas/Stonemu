import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Link as={RouterLink} to="/" fontWeight="bold">Stonemu</Link>
        </Flex>

        <Flex alignItems={'center'}>
          <Link as={RouterLink} to="/" mr={4}>Home</Link>
          {user ? (
            <>
              <Link as={RouterLink} to="/dashboard" mr={4}>Dashboard</Link>
              <Link as={RouterLink} to="/playground" mr={4}>Playground</Link>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <Link as={RouterLink} to="/login">Login</Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
