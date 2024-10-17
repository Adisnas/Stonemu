import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

function ChessGame() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;
    return true;
  }

  return (
    <Box maxWidth="500px" margin="auto">
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      <Button onClick={() => setGame(new Chess())} mt={4}>New Game</Button>
    </Box>
  );
}

export default ChessGame;
