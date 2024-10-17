import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import LeaderBoard from '../components/LeaderBoard';
import Events from '../components/Events';
import Tournaments from '../components/Tournaments';
import WalletConnection from '../components/WalletConnection';
import { getUserStats } from '../services/api';

function Dashboard() {
  const { user } = useAuth();
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    async function fetchUserStats() {
      if (user) {
        try {
          const stats = await getUserStats(user.id);
          setUserStats(stats);
        } catch (error) {
          console.error('Failed to fetch user stats:', error);
        }
      }
    }
    fetchUserStats();
  }, [user]);

  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <Heading as="h2" size="xl" mb={6}>Welcome, {user?.username}!</Heading>
      {userStats && (
        <Box mb={6}>
          <Text fontSize="lg">Level: {userStats.level}</Text>
          <Text fontSize="lg">Points: {userStats.points}</Text>
        </Box>
      )}
      <WalletConnection />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <LeaderBoard />
        <Events />
        <Tournaments />
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
