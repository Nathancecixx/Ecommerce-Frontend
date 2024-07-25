import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, editFromCart } from '../api'; // Ensure you create these API functions

const Cart = ({ token }) => {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        try {
            const data = await getCart(token);
            setCart(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    useEffect(() => {
        if(token){
            fetchCart();
        }
    }, [token]);

    const handleRemove = async (productId) => {
        try {
            const updatedCart = await removeFromCart(productId, token);
            setCart(updatedCart);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const addToProductQuantity = async (productId) => {
        try {
            const updatedCart = await editFromCart(productId, 1, token); // Pass 1 to increase quantity
            setCart(updatedCart);
        } catch (error) {
            console.error('Error adding +1 to item quantity:', error);
        }
    };

    const subtractFromProductQuantity = async (productId) => {
        try {
            const updatedCart = await editFromCart(productId, -1, token); // Pass -1 to decrease quantity
            setCart(updatedCart);
        } catch (error) {
            console.error('Error subtracting 1 from item quantity:', error);
        }
    };

    useEffect(() => {
        console.log('Updated cart:', cart); // Log the updated cart
    }, [cart]);

    return (
        <div>
            <h1>My Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.product._id}> {/* Ensure each list item has a unique key */}
                        <h2>{item.product.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemove(item.product._id)}>Remove</button>
                        {token && (
                            <>
                                <button onClick={() => addToProductQuantity(item.product._id)}>+</button>
                                <button onClick={() => subtractFromProductQuantity(item.product._id)}>-</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {!token && <p>Please log in to add items to your cart.</p>}
        </div>
    );
};

export default Cart;

