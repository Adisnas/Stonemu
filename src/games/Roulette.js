import React, { useState } from 'react';
import { Box, Button, Text, VStack, HStack, Input, SimpleGrid } from '@chakra-ui/react';

const numbers = Array.from({ length: 37 }, (_, i) => i);

function Roulette() {
  const [bet, setBet] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  function placeBet() {
    if (bet <= 0 || selectedNumber === null) {
      setMessage('Please place a valid bet and select a number.');
      return;
    }

    const winningNumber = Math.floor(Math.random() * 37);
    setResult(winningNumber);

    if (winningNumber === selectedNumber) {
      setMessage(`You won! Your prize is ${bet * 35}`);
    } else {
      setMessage('You lost. Try again!');
    }
  }

  return (
    <Box>
      <VStack spacing={4}>
        <Text fontSize="2xl">Roulette</Text>
        <HStack>
          <Input 
            type="number" 
            value={bet} 
            onChange={(e) => setBet(Number(e.target.value))}
            placeholder="Enter bet amount"
          />
          <Button onClick={placeBet}>Place Bet</Button>
        </HStack>
        <Text>Selected Number: {selectedNumber !== null ? selectedNumber : 'None'}</Text>
        <SimpleGrid columns={6} spacing={2}>
          {numbers.map(num => (
            <Button 
              key={num} 
              onClick={() => setSelectedNumber(num)}
              colorScheme={selectedNumber === num ? 'blue' : 'gray'}
            >
              {num}
            </Button>
          ))}
        </SimpleGrid>
        {result !== null && <Text>Result: {result}</Text>}
        {message && <Text fontSize="xl">{message}</Text>}
      </VStack>
    </Box>
  );
}

export default Roulette;
