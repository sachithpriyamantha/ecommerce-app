import React from 'react';
import { useCart } from '../Context/CartContext';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'High-quality item', image: 'https://img.drz.lazcdn.com/g/kf/S7cbe22470531457ab26daaca2c3aa723B.jpeg_400x400q80.jpg_.webp' },
  { id: 2, name: 'Product 2', price: 200, description: 'Durable and reliable', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 150, description: 'Affordable and efficient', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 100, description: 'High-quality item', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 200, description: 'Durable and reliable', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: 150, description: 'Affordable and efficient', image: 'https://via.placeholder.com/150' },
];

const Products = () => {
  const { addToCart } = useCart();
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: theme.palette.grey[100],
        minHeight: '100vh',
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
          sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Our Products
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: product.id * 0.1 }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  margin: '0 auto',
                  borderRadius: 2,
                  boxShadow: theme.shadows[3],
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 150,
                    objectFit: 'contain',
                    padding: 2,
                  }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                      mt: 2,
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                      },
                    }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

