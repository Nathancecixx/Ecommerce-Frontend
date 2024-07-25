import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import ProductDetails from './Components/ProductDetails';
import LandingPage from './Pages/Landing';
import Layout from './Pages/Layout';
import NoPage from "./Pages/NoPage";
import Cart from './Pages/Cart'; // Import Cart component
import { getCart } from './api'; // Ensure you have getCart function in your api.js

const App = () => {
    const [token, setToken] = useState(null); // Manage authentication token
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0); // Manage cart item count

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        console.log('Stored token:', storedToken);
        if (storedToken) {
            setToken(storedToken);
            //setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        console.log('Token state updated:', token);
        if (token) {
            const fetchCart = async () => {
                try {
                    const cart = await getCart(token);
                    setCartItemCount(cart.reduce((count, item) => count + item.quantity, 0));
                } catch (error) {
                    console.error('Error fetching cart:', error);
                }
            };
            fetchCart();
        }
    }, [token]);


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout token={token} setToken={setToken} />} // Pass states to Layout
                    >
                        <Route index element={<LandingPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login setToken={setToken}/>} />
                        <Route path="/products/:id" element={<ProductDetails token={token} />} />
                        <Route path="/products" element={<ProductList token={token} />} /> {/* Pass the token here */}
                        <Route path="/cart" element={<Cart token={token}/>} />
                        <Route path="/*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
