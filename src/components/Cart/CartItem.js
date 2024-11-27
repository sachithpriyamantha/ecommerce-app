import React from "react";
import { useCart } from "../../Context/CartContext";

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div style={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            <div style={{ marginLeft: "16px", flex: 1 }}>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ marginTop: "8px", color: "red" }}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
