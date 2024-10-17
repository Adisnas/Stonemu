import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to log in');
    }
  }

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Login</Button>
      </form>
      {error && <Text color="red.500" mt={4}>{error}</Text>}
    </Box>
  );
}

export default Login;
