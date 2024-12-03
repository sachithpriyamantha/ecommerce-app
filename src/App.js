import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Products from './pages/Products';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/Home'
import Wellcome from './pages/Wellcome';
import { CartProvider } from './Context/CartContext';
import { AuthProvider, useAuth } from '../src/Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <div>Please login to access this page.</div>;
};

const Navbar = () => {
  const location = useLocation();


  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/') {
    return null;
  }

  return (
    <AppBar position="fixed" sx={{
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
      <Toolbar sx={{
          justifyContent: 'space-between',
          padding: { xs: '0 16px', md: '0 32px' },
        }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          TrendyShop
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            component={Link}
            to="/home"
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
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
              fontWeight: 'bold',
              '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
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
              fontWeight: 'bold',
              '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
            }}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/home" element={<Home />} />
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
