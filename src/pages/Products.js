import React from 'react';
import { useCart } from '../Context/CartContext';

const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'High-quality item', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 200, description: 'Durable and reliable', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 150, description: 'Affordable and efficient', image: 'https://via.placeholder.com/150' },
  ];
  

  const Products = () => {
    const { addToCart } = useCart();
  
    return (
      <div>
        <h1>Products</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
              <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Products;


