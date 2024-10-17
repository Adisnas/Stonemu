import React, { useState, useEffect } from 'react';
import { Box, Button, Text, SimpleGrid } from '@chakra-ui/react';

function Okey() {
  const [tiles, setTiles] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  function initializeGame() {
    const newTiles = [];
    for (let color = 1; color <= 4; color++) {
      for (let number = 1; number <= 13; number++) {
        newTiles.push({ color, number });
        newTiles.push({ color, number });
      }
    }
    newTiles.push({ color: 0, number: 0 }, { color: 0, number: 0 }); // Jokers

    // Shuffle tiles
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }

    setTiles(newTiles);
    setPlayerHand(newTiles.slice(0, 14));
  }

  function renderTile(tile) {
    const colorMap = {
      0: 'black',
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'yellow',
    };

    return (
      <Box 
        key={`${tile.color}-${tile.number}`} 
        border="1px" 
        borderColor="gray.200" 
        p={2} 
        bg={colorMap[tile.color]}
        color={tile.color === 1 ? 'white' : 'black'}
      >
        {tile.color === 0 ? 'Joker' : tile.number}
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Okey</Text>
      <Text mb={2}>Your Hand:</Text>
      <SimpleGrid columns={7} spacing={1} mb={4}>
        {playerHand.map(renderTile)}
      </SimpleGrid>
      <Button onClick={initializeGame}>New Game</Button>
    </Box>
  );
}

export default Okey;
