import React, { useEffect, useState } from 'react';
import { getProducts } from '../api'; // Corrected path

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

