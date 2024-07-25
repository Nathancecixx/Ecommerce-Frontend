import React, { useEffect, useState } from 'react';
import { getProducts, addToCart } from '../api'; // Ensure you have addToCart function in your api.js

const ProductList = ({ token }) => { // Make sure you pass the token as a prop
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log('Fetched products:', data); // Debugging log
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleClick = async (productId) => {
        if(!token){
            console.error('Please login to add items to your cart');
            return;
        }

        try {
            console.log('Adding product to cart:', { productId, quantity: 1 }); // Debugging log
            const response = await addToCart(productId, 1, token); // Assuming quantity of 1 for simplicity
            console.log('Product added to cart:', response);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => handleClick(product._id)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
