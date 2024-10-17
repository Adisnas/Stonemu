import React, { useState } from 'react';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <Button 
        height="50px" 
        width="50px" 
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </Button>
    );
  }

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(Boolean)) {
    status = 'Draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Tic Tac Toe</Text>
      <Text mb={4}>{status}</Text>
      <SimpleGrid columns={3} spacing={1}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
      </SimpleGrid>
      <Button mt={4} onClick={() => setBoard(Array(9).fill(null))}>
        New Game
      </Button>
    </Box>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
