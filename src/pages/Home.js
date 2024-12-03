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
        {
            name: "Lifestyle Books",
            image: "https://img.drz.lazcdn.com/static/lk/p/8f12b6c5d75dfbe165a6ceb7541307b7.jpg_170x170q80.jpg",
            price: "$14",
        },
        {
            name: "Table Lamps",
            image: "https://img.drz.lazcdn.com/g/kf/Sc4715a0143e347b9b2ba3a1fdc815fb36.jpg_170x170q80.jpg",
            price: "$11",
        },
        {
            name: "Electric Knives",
            image: "https://img.drz.lazcdn.com/static/lk/p/e2bb93ed339c28a3f81a59a7726b7e3d.png_170x170q80.png",
            price: "$4",
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
                padding: 4,
                gap: 6,
                position: "relative",
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                }}
            />

            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    color: "white",
                    zIndex: 2,
                    maxWidth: "800px",
                }}
            >
                <Typography
                    variant="h2"
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={{
                        fontWeight: "bold",
                        textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
                        lineHeight: 1.2,
                        mt: 6,
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
                        fontSize: { xs: "1rem", md: "1.5rem" },
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                        lineHeight: 1.5,
                    }}
                >
                    Discover the latest gadgets and accessories, tailored to your style.
                </Typography>
                <Button
                    variant="contained"
                    to="/products"
                    color="secondary"
                    component={Link}
                    sx={{
                        mt: 2,
                        px: 5,
                        py: 1.8,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        background: "linear-gradient(to right, #6a11cb, #2575fc)",
                        '&:hover': {
                            background: "linear-gradient(to right, #2575fc, #6a11cb)",
                        },
                    }}
                >
                    Start Shopping
                </Button>
            </Box>

            {/* Products Section */}
            <Typography
                variant="h4"
                sx={{
                    color: "white",
                    textAlign: "center",
                    zIndex: 2,
                    textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
                    fontSize: { xs: "2rem", md: "2.5rem" },
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
                                width: "320px",
                                height: "420px",
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                backgroundColor: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transition: "transform 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-10px)",
                                },
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "70%",
                                    objectFit: "cover",
                                    borderBottom: "2px solid #f0f0f0",
                                }}
                            />
                            <Box
                                sx={{
                                    p: 2,
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "medium", color: "#777" }}>
                                    {product.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 0,
                                        px: 3,
                                        fontSize: "1rem",
                                        borderRadius: "6px",
                                        background: "linear-gradient(to right, #6a11cb, #2575fc)",
                                        '&:hover': {
                                            background: "linear-gradient(to right, #2575fc, #6a11cb)",
                                        },
                                    }}
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
