import React, { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { getUsers, getGames, createEvent, createTournament } from '../services/api';

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const fetchedUsers = await getUsers();
      const fetchedGames = await getGames();
      setUsers(fetchedUsers);
      setGames(fetchedGames);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  async function handleCreateEvent() {
    // Implement event creation logic
  }

  async function handleCreateTournament() {
    // Implement tournament creation logic
  }

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>Admin Panel</Heading>
      
      <Heading as="h3" size="lg" mb={4}>Users</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Username</Th>
            <Th>Points</Th>
            <Th>Level</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.username}</Td>
              <Td>{user.points}</Td>
              <Td>{user.level}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h3" size="lg" my={4}>Games</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>User ID</Th>
            <Th>Game Type</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {games.map(game => (
            <Tr key={game.id}>
              <Td>{game.id}</Td>
              <Td>{game.user_id}</Td>
              <Td>{game.game_type}</Td>
              <Td>{game.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Button onClick={handleCreateEvent} mt={4} mr={4}>Create Event</Button>
      <Button onClick={handleCreateTournament} mt={4}>Create Tournament</Button>
    </Box>
  );
}

export default AdminPanel;
