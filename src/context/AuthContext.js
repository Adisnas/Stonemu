import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/user').then(response => {
        setUser(response.data);
      }).catch(error => {
        console.error('Failed to get user data:', error);
        localStorage.removeItem('token');
      });
    }
  }, []);

  const login = async (username, password) => {
    const response = await api.post('/login', { username, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  const register = async (username, password) => {
    const response = await api.post('/register', { username, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
