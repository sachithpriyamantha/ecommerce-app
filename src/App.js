// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductList from "./components/Product/ProductList";
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import { AuthProvider } from "../src/Context/AuthContext";
// import { CartProvider } from "./Context/CartContext";

// const App = () => {
//     return (
//         <AuthProvider>
//             <CartProvider>
//                 <BrowserRouter>
//                     <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/products" element={<Products />} />
//   <Route path="/cart" element={<Cart />} />
// </Routes>

//                 </BrowserRouter>
//             </CartProvider>
//         </AuthProvider>
//     );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from '../src/Context/CartContext'; // Import CartProvider

const App = () => {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <nav>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
