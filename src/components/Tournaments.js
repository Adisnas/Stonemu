import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { getTournaments } from '../services/api';

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetchTournaments();
  }, []);

  async function fetchTournaments() {
    try {
      const data = await getTournaments();
      setTournaments(data);
    } catch (error) {
      console.error('Failed to fetch tournaments:', error);
    }
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Tournaments</Text>
      <VStack spacing={4} align="stretch">
        {tournaments.map(tournament => (
          <Box key={tournament.id} p={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">{tournament.title}</Text>
            <Text>{tournament.description}</Text>
            <Text>Game: {tournament.game_type}</Text>
            <Text>Reward: {tournament.reward_points} points</Text>
            <Button mt={2} size="sm">Join</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Tournaments;
