import React from 'react';
import { useCart } from '../Context/CartContext';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <Box
      sx={{
        paddingTop: '70px',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1e3c72' }}
        >
          Shopping Cart
        </Typography>
      </motion.div>

      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
            Your cart is empty!
          </Typography>
        </motion.div>
      ) : (
        <TableContainer
          component={Paper}
          elevation={4}
          sx={{ mt: 3, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1e3c72' }}>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Product
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Price
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Quantity
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Total
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {cart.map((item, index) => (
                  <TableRow
                    key={item.id}
                    component={motion.tr}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#f7f9fc' : '#ffffff',
                      '&:hover': { backgroundColor: '#eef2f7' },
                    }}
                  >
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="center">${item.price}</TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        variant="outlined"
                        size="small"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, +e.target.value)}
                        inputProps={{ min: 1 }}
                        sx={{ width: '80px' }}
                      />
                    </TableCell>
                    <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => removeFromCart(item.id)}
                          sx={{
                            transition: 'background-color 0.3s',
                            '&:hover': { backgroundColor: '#ff1744', color: 'white' },
                          }}
                        >
                          Remove
                        </Button>
                      </motion.div>
                    </TableCell>
                  </TableRow>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h5"
          align="right"
          sx={{ marginTop: '20px', fontWeight: 'bold', color: '#1e3c72' }}
        >
          Total Cost: ${totalCost.toFixed(2)}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Cart;
