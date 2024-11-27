import React from "react";
import { useCart } from "../../Context/CartContext";

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
