import React from "react";
import { useCart } from "../../Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, getTotalPrice } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <h3>Total: ${getTotalPrice()}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
