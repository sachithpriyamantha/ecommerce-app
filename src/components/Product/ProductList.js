import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = [
        { id: 1, name: "Product A", price: 10, description: "Description A", image: "/imgA.jpg" },
        { id: 2, name: "Product B", price: 15, description: "Description B", image: "/imgB.jpg" },
        { id: 3, name: "Product C", price: 20, description: "Description C", image: "/imgC.jpg" },
    ];

    return (
        <div>
            <h2>Products</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
