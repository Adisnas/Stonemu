import React from 'react';
import { Box } from '@chakra-ui/react';
import AdminPanel from '../components/AdminPanel';

function Admin() {
  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <AdminPanel />
    </Box>
  );
}

export default Admin;
