# Stonemu Frontend

This is the frontend application for Stonemu, a platform where users can play various games and earn TON cryptocurrency.

## Features

- User authentication (login/register)
- Dashboard with user stats and leaderboard
- Multiple games: Chess, Backgammon, Tic Tac Toe, Okey, Blackjack, and Roulette
- Events and Tournaments
- TON wallet integration
- Admin panel for managing users, events, and tournaments

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/adisnas/stonemu.git
   ```

2. Navigate to the project directory:
   ```
   cd stonemu-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   Replace the URL with your backend API URL.

### Running the Application

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```
npm run build
```

## Project Structure

- `src/components`: Reusable React components
- `src/pages`: Main page components
- `src/games`: Individual game implementations
- `src/services`: API and TON integration services
- `src/context`: React context for global state management
- `src/hooks`: Custom React hooks
- `src/utils`: Utility functions and constants

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
