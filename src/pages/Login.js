import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  CircularProgress,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Lock } from '@mui/icons-material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        login(values.email);
        navigate('/products');
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: 'radial-gradient(circle, rgba(58,141,255,1) 0%, rgba(134,185,255,1) 100%)',
        p: 2,
      }}
    >
      <Paper
        component={motion.div}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        elevation={12}
        sx={{
          p: 4,
          maxWidth: 450,
          width: '100%',
          borderRadius: 5,
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          variant="h4"
          sx={{ fontWeight: 700, mb: 2, color: '#333' }}
        >
          Login
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
          Welcome back! Please log in to your account.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              sx={{ borderRadius: 3 }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{ borderRadius: 3 }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography
              variant="body2"
              sx={{
                color: '#1976d2',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Forgot Password?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#1976d2',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting}
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 3,
              background: 'linear-gradient(to right, #6a11cb, #2575fc)',
              '&:hover': {
                background: 'linear-gradient(to right, #2575fc, #6a11cb)',
              },
            }}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Login'
            )}
          </Button>
        </form>
      
      </Paper>
    </Box>
  );
};

export default Login;
