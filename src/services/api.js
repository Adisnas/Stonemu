import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = (username, password) => api.post('/login', { username, password });
export const register = (username, password) => api.post('/register', { username, password });
export const getUser = (userId) => api.get(`/users/${userId}`);
export const updateUser = (userId, userData) => api.put(`/users/${userId}`, userData);
export const getGames = () => api.get('/games');
export const createGame = (gameData) => api.post('/games', gameData);
export const finishGame = (gameId, result) => api.post(`/games/${gameId}/finish`, result);
export const getEvents = () => api.get('/events');
export const getTournaments = () => api.get('/tournaments');
export const getLeaderboard = () => api.get('/leaderboard');

// Admin specific endpoints
export const getUsers = () => api.get('/admin/users');
export const createEvent = (eventData) => api.post('/admin/events', eventData);
export const createTournament = (tournamentData) => api.post('/admin/tournaments', tournamentData);

export default api;
