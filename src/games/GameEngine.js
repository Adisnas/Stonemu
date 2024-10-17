import React from 'react';
import Chess from './Chess';
import Backgammon from './Backgammon';
import TicTacToe from './TicTacToe';
import Okey from './Okey';
import Blackjack from './Blackjack';
import Roulette from './Roulette';

const games = {
  chess: Chess,
  backgammon: Backgammon,
  tictactoe: TicTacToe,
  okey: Okey,
  blackjack: Blackjack,
  roulette: Roulette,
};

function GameEngine({ game }) {
  const GameComponent = games[game];
  return GameComponent ? <GameComponent /> : null;
}

export default GameEngine;
