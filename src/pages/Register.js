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
} from '@mui/material';
import { motion } from 'framer-motion';

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(135deg, #6D83F2, #A4E6F8)',
        p: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle Animated Background */}
      <motion.div
        initial={{ x: '-50%', y: '-50%', scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <Paper
        component={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        elevation={12}
        sx={{
          zIndex: 2,
          p: 4,
          maxWidth: 500,
          width: '100%',
          borderRadius: 4,
          textAlign: 'center',
          background: 'white',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          variant="h4"
          align="center"
          sx={{ mb: 2, fontWeight: 700, color: '#444' }}
        >
          Join Us Today
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          Sign up to start your journey with our amazing products.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6D83F2',
                },
              }}
            />
          </Box>
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
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              bgcolor: 'linear-gradient(to right, #6D83F2, #A4E6F8)',
              '&:hover': {
                background: 'linear-gradient(to right, #A4E6F8, #6D83F2)',
              },
            }}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Register'
            )}
          </Button>
        </form>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, cursor: 'pointer', color: '#1976d2' }}
          onClick={() => navigate('/login')}
        >
          Already have an account? Log in
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
