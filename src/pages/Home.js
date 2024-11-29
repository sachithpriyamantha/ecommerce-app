import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the E-Commerce App</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to start shopping.
      </p>
      <p>
        <Link to="/products">View Products</Link>
      </p>
    </div>
  );
};

export default Home;
