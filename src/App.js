import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { WalletProvider } from './context/WalletContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <WalletProvider>
          <Router>
            <div className="App">
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/playground" component={Playground} />
                <PrivateRoute path="/admin" component={Admin} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </WalletProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
