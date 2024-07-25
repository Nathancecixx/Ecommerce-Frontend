import React, { useState } from 'react';
import { createOrder } from './api';

const CreateOrder = ({ token }) => {
    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createOrder({ orderItems, totalPrice }, token);
            console.log('Order created:', data);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields to manage orderItems and totalPrice */}
            <button type="submit">Create Order</button>
        </form>
    );
};

export default CreateOrder;
