import React, { useState } from 'react';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import Chess from '../games/Chess';
import Backgammon from '../games/Backgammon';
import TicTacToe from '../games/TicTacToe';
import Okey from '../games/Okey';
import Blackjack from '../games/Blackjack';
import Roulette from '../games/Roulette';

function GameArea() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = {
    chess: Chess,
    backgammon: Backgammon,
    tictactoe: TicTacToe,
    okey: Okey,
    blackjack: Blackjack,
    roulette: Roulette,
  };

  const GameComponent = games[selectedGame];

  return (
    <Box>
      <SimpleGrid columns={3} spacing={4} mb={4}>
        {Object.keys(games).map((game) => (
          <Button key={game} onClick={() => setSelectedGame(game)}>
            {game.charAt(0).toUpperCase() + game.slice(1)}
          </Button>
        ))}
      </SimpleGrid>
      {GameComponent && <GameComponent />}
    </Box>
  );
}

export default GameArea;
