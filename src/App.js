import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Products from './pages/Products';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/Home';
import { CartProvider } from './Context/CartContext';
import { AuthProvider, useAuth } from '../src/Context/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <div>Please login to access this page.</div>;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* Navigation Bar */}
          <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                }}
              >
                E-Commerce Website
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/"
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/products"
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Products
                </Button>
                <Button
                  component={Link}
                  to="/cart"
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Cart
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
