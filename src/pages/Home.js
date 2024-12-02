import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
    const products = [
        {
            name: "Smartphone",
            image: "https://img.drz.lazcdn.com/static/lk/p/c3bea0fba0adaa44d2375460a676b91d.jpg_400x400q80.jpg_.webp",
            price: "$999",
        },
        {
            name: "Wireless Earbuds",
            image: "https://img.drz.lazcdn.com/static/lk/p/32d7ee2b39f1cd47a7cdb2a4c5b31b90.jpg_400x400q80.jpg",
            price: "$15",
        },
        {
            name: "Smartwatch",
            image: "https://img.drz.lazcdn.com/static/lk/p/891c2ddbc42c7dda30d5d6380cba4d3f.jpg_400x400q80.jpg_.webp",
            price: "$20",
        },
        {
            name: "Laptop",
            image: "https://img.drz.lazcdn.com/static/lk/p/c70f0725e7a24d1955797f9e0df7a779.jpg_200x200q80.jpg_.webp",
            price: "$799.99",
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: "url('https://www.microbizmag.co.uk/wp-content/uploads/2024/01/ecommerce-statistics-1024x574.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 3,
                gap: 4,
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            />

            {/* Hero Section */}
            <Box
                sx={{ textAlign: "center", color: "white", zIndex: 2 }}
            >
                <Typography
                    variant="h2"
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "3.5rem" },
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                    }}
                >
                    Welcome to TrendyShop
                </Typography>
                <Typography
                    variant="subtitle1"
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    sx={{
                        mt: 2,
                        textShadow: "1px 1px 6px rgba(0, 0, 0, 0.7)",
                    }}
                >
                    Explore the future of shopping, one click at a time.
                </Typography>
                <Button
                    variant="contained"
                    to="/products"
                    color="secondary"
                    component={Link}
                    sx={{
                        mt: 3,
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: "bold",
                    }}
                >
                    Start Shopping
                </Button>
            </Box>

            <Typography
                variant="h4"
                sx={{
                    color: "white",
                    textAlign: "center",
                    zIndex: 2,
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Latest Products
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ zIndex: 2 }}>
                {products.map((product, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Box
                            sx={{
                                width: "330px",
                                height: "410px",
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: 8,
                                backgroundColor: "#f9f9f9",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%", display: "block", height: "65%", objectFit: "cover" }}
                            />
                            <Box sx={{ p: 2, textAlign: "center" }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "medium", color: "#777" }}>
                                    {product.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2, px: 3, fontSize: "0.9rem" }}
                                >
                                    Buy Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default HomePage;
