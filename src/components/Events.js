import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { getEvents } from '../services/api';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Events</Text>
      <VStack spacing={4} align="stretch">
        {events.map(event => (
          <Box key={event.id} p={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">{event.title}</Text>
            <Text>{event.description}</Text>
            <Text>Reward: {event.reward_points} points</Text>
            <Button mt={2} size="sm">Participate</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Events;
