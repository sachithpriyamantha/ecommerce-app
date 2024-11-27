import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import { AuthProvider } from "../src/Context/AuthContext";
import { CartProvider } from "./Context/CartContext";

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
