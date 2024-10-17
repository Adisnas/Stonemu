import React, { useState, useEffect } from 'react';
import { Box, Button, Text, VStack, HStack, Image } from '@chakra-ui/react';

const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  return suits.flatMap(suit => values.map(value => ({ suit, value })));
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function calculateHandValue(hand) {
  let value = 0;
  let aces = 0;
  for (let card of hand) {
    if (card.value === 'A') {
      aces += 1;
      value += 11;
    } else if (['K', 'Q', 'J'].includes(card.value)) {
      value += 10;
    } else {
      value += parseInt(card.value);
    }
  }
  while (value > 21 && aces > 0) {
    value -= 10;
    aces -= 1;
  }
  return value;
}

function Blackjack() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  function startNewGame() {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck);
    setPlayerHand([newDeck.pop(), newDeck.pop()]);
    setDealerHand([newDeck.pop(), newDeck.pop()]);
    setGameOver(false);
    setMessage('');
  }

  function hit() {
    if (gameOver) return;
    const newPlayerHand = [...playerHand, deck.pop()];
    setPlayerHand(newPlayerHand);
    setDeck(deck);

    if (calculateHandValue(newPlayerHand) > 21) {
      setGameOver(true);
      setMessage('Bust! Dealer wins.');
    }
  }

  function stand() {
    if (gameOver) return;
    let newDealerHand = [...dealerHand];
    let newDeck = [...deck];

    while (calculateHandValue(newDealerHand) < 17) {
      newDealerHand.push(newDeck.pop());
    }

    setDealerHand(newDealerHand);
    setDeck(newDeck);

    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(newDealerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
      setMessage('Player wins!');
    } else if (dealerValue > playerValue) {
      setMessage('Dealer wins.');
    } else {
      setMessage('It\'s a tie!');
    }

    setGameOver(true);
  }

  return (
    <Box>
      <VStack spacing={4}>
        <Text fontSize="2xl">Blackjack</Text>
        <HStack>
          <Button onClick={hit} disabled={gameOver}>Hit</Button>
          <Button onClick={stand} disabled={gameOver}>Stand</Button>
          <Button onClick={startNewGame}>New Game</Button>
        </HStack>
        <Text>Player's Hand: {calculateHandValue(playerHand)}</Text>
        <HStack>
          {playerHand.map((card, index) => (
            <Text key={index}>{card.value}{card.suit}</Text>
          ))}
        </HStack>
        <Text>Dealer's Hand: {gameOver ? calculateHandValue(dealerHand) : '?'}</Text>
        <HStack>
          {dealerHand.map((card, index) => (
            <Text key={index}>{index === 0 || gameOver ? `${card.value}${card.suit}` : '??'}</Text>
          ))}
        </HStack>
        {message && <Text fontSize="xl">{message}</Text>}
      </VStack>
    </Box>
  );
}

export default Blackjack;
