import React, { useState, useEffect } from 'react';
import { Box, Button, Text, SimpleGrid } from '@chakra-ui/react';

function Backgammon() {
  const [board, setBoard] = useState(Array(24).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState([]);

  useEffect(() => {
    initializeBoard();
  }, []);

  function initializeBoard() {
    const newBoard = Array(24).fill(0);
    newBoard[0] = 2;
    newBoard[11] = -5;
    newBoard[12] = 5;
    newBoard[23] = -2;
    setBoard(newBoard);
  }

  function rollDice() {
    const newDice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    setDice(newDice);
  }

  function renderPoint(index) {
    const value = board[index];
    const color = value > 0 ? 'red' : 'blue';
    const count = Math.abs(value);

    return (
      <Box key={index} border="1px" borderColor="gray.200" p={2}>
        {count > 0 && (
          <Text color={color} fontWeight="bold">
            {count}
          </Text>
        )}
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Backgammon</Text>
      <SimpleGrid columns={12} spacing={1} mb={4}>
        {board.slice(0, 12).map((_, index) => renderPoint(index))}
      </SimpleGrid>
      <SimpleGrid columns={12} spacing={1} mb={4}>
        {board.slice(12).map((_, index) => renderPoint(23 - index))}
      </SimpleGrid>
      <Button onClick={rollDice} mb={4}>Roll Dice</Button>
      {dice.length > 0 && (
        <Text>Dice: {dice.join(', ')}</Text>
      )}
    </Box>
  );
}

export default Backgammon;
