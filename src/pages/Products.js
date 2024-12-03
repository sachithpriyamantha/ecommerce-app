import React, { useState } from 'react';
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
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Side bag', price: 10, description: 'High-quality item', image: 'https://img.drz.lazcdn.com/g/kf/S7cbe22470531457ab26daaca2c3aa723B.jpeg_400x400q80.jpg_.webp' },
  { id: 2, name: 'Inpods pro Air 13 pods', price: 15, description: 'Durable and reliable', image: 'https://img.drz.lazcdn.com/static/lk/p/32d7ee2b39f1cd47a7cdb2a4c5b31b90.jpg_400x400q80.jpg' },
  { id: 3, name: 'Bag for Men with Large Capacity', price: 11, description: 'Affordable and efficient', image: 'https://img.drz.lazcdn.com/g/kf/S337e40a7f10e46cbb482e9afb8d92e0aY.jpg_400x400q80.jpg_.webp' },
  { id: 4, name: 'Smart Watch T900 Ultra', price: 20, description: 'High-quality item', image: 'https://img.drz.lazcdn.com/static/lk/p/891c2ddbc42c7dda30d5d6380cba4d3f.jpg_400x400q80.jpg_.webp' },
  { id: 5, name: 'Female Designers Minority Rings', price: 158, description: 'Durable and reliable', image: 'https://img.drz.lazcdn.com/g/kf/Sf598f905328844c4bcac51b125959b1bP.jpg_400x400q75.jpg_.webp' },
  { id: 6, name: 'For iPhone 16', price: 999, description: 'Affordable and efficient', image: 'https://img.drz.lazcdn.com/static/lk/p/c3bea0fba0adaa44d2375460a676b91d.jpg_400x400q80.jpg_.webp' },
];

const Products = () => {
  const { addToCart } = useCart();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'low' && product.price <= 50) ||
      (priceFilter === 'mid' && product.price > 50 && product.price <= 200) ||
      (priceFilter === 'high' && product.price > 200);
    return matchesName && matchesPrice;
  });

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
        padding: '60px',
        minHeight: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'white',
            mb: 4,
          }}
        >
          Explore Our Products
        </Typography>
      </motion.div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 5,
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 2,
          boxShadow: theme.shadows[2],
        }}
      >
        <TextField
          placeholder="Search by Name"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            maxWidth: 400,
            flexGrow: 1,
            backgroundColor: 'white',
            borderRadius: 1,
          }}
        />
        <FormControl
          variant="outlined"
          sx={{
            maxWidth: 200,
            flexGrow: 1,
            backgroundColor: 'white',
            borderRadius: 1,
          }}
        >
          
          <Select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            label="Price Range"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="low">Under $50</MenuItem>
            <MenuItem value="mid">$50 - $200</MenuItem>
            <MenuItem value="high">Above $200</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
                    borderRadius: 3,
                    boxShadow: theme.shadows[6],
                    transition: 'transform 0.3s ease-in-out',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                    }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent
                    sx={{
                      padding: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 'bold', mb: 3 }}
                    >
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        fontWeight: 'bold',
                        borderRadius: 2,
                        padding: '10px',
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ width: '100%', mt: 4, color: 'white' }}>
            No products found. Try adjusting your search or filter.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Products;
