import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useWallet } from '../hooks/useWallet';

function WalletConnection() {
  const { wallet, connectWallet, disconnectWallet } = useWallet();

  return (
    <Box>
      {wallet ? (
        <>
          <Text>Connected: {wallet.address}</Text>
          <Text>Balance: {wallet.balance} TON</Text>
          <Button onClick={disconnectWallet}>Disconnect Wallet</Button>
        </>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </Box>
  );
}

export default WalletConnection;
