import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('https://www.microbizmag.co.uk/wp-content/uploads/2024/01/ecommerce-statistics-1024x574.webp')",
        justifyContent: 'center',
        height: '100vh',
        backgroundSize: "cover",
        textAlign: 'center',
        //background: 'linear-gradient(to right, #6ee7b7, #3b82f6)',
        padding: 3,
        overflow: 'hidden',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container
        sx={{
          width: '130vh',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(15px)',
          borderRadius: 5,
          padding: 4,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: '700',
            color: '#1e40af',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            lineHeight: 1.2,
          }}
        >
          Welcome to the E-Commerce App
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#4b5563',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          Discover amazing deals and exclusive products tailored just for you. Enjoy a seamless shopping experience.
        </Typography>
        <Stack direction="column" spacing={3} alignItems="center">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: 'none',
                px: 6,
                borderRadius: 8,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease-in-out, background-color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#2563eb',
                },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                textTransform: 'none',
                px: 6,
                borderColor: '#2563eb',
                color: '#2563eb',
                borderRadius: 8,
                '&:hover': {
                  borderColor: '#2563eb',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: '#2563eb',
                },
              }}
            >
              Register
            </Button>
          </Stack>
          {/* <Button
            component={Link}
            to="/products"
            variant="contained"
            color="success"
            size="large"
            sx={{
              textTransform: 'none',
              px: 8,
              background: 'linear-gradient(90deg, #10b981, #22d3ee)',
              borderRadius: 8,
              '&:hover': {
                background: 'linear-gradient(90deg, #047857, #14b8a6)',
              },
            }}
          >
            View Products
          </Button> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
