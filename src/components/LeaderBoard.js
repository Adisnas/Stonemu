import React, { useState, useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import { getLeaderboard } from '../services/api';

function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  async function fetchLeaderboard() {
    try {
      const data = await getLeaderboard();
      setLeaderboard(data);
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    }
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Leaderboard</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Username</Th>
            <Th isNumeric>Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leaderboard.map((user, index) => (
            <Tr key={user.id}>
              <Td>{index + 1}</Td>
              <Td>{user.username}</Td>
              <Td isNumeric>{user.points}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default LeaderBoard;
