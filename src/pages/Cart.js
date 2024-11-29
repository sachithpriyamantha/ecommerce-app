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
    <Box sx={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
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
        <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                  Product
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                  Price
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                  Quantity
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                  Total
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <TableRow
                      sx={{
                        backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff',
                        '&:hover': { backgroundColor: '#f0f0f0' },
                      }}
                    >
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">${item.price}</TableCell>
                      <TableCell align="center">
                        <TextField
                          type="number"
                          variant="outlined"
                          size="small"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, +e.target.value)}
                          inputProps={{ min: 1 }}
                          sx={{ width: '70px' }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        ${item.price * item.quantity}
                      </TableCell>
                      <TableCell align="center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => removeFromCart(item.id)}
                            sx={{
                              transition: 'background-color 0.3s',
                              '&:hover': { backgroundColor: 'error.main', color: 'white' },
                            }}
                          >
                            Remove
                          </Button>
                        </motion.div>
                      </TableCell>
                    </TableRow>
                  </motion.tr>
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
          sx={{ marginTop: '20px', fontWeight: 'bold', color: 'primary.main' }}
        >
          Total Cost: ${totalCost}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Cart;

