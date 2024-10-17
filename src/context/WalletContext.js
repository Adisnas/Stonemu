import React, { createContext, useState, useEffect } from 'react';
import { createWallet, getBalance } from '../services/ton';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const storedWallet = localStorage.getItem('wallet');
    if (storedWallet) {
      const parsedWallet = JSON.parse(storedWallet);
      setWallet(parsedWallet);
      updateBalance(parsedWallet.address);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const newWallet = await createWallet();
      setWallet(newWallet);
      localStorage.setItem('wallet', JSON.stringify(newWallet));
      updateBalance(newWallet.address);
    } catch (error) {
      console.error('Failed to create wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    localStorage.removeItem('wallet');
  };

  const updateBalance = async (address) => {
    try {
      const balance = await getBalance(address);
      setWallet(prevWallet => ({ ...prevWallet, balance }));
    } catch (error) {
      console.error('Failed to get balance:', error);
    }
  };

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet, updateBalance }}>
      {children}
    </WalletContext.Provider>
  );
}
