import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import LandingPage from './Pages/Landing';
import Header from './Components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
            </Routes>
        </Router>
    );
};

export default App;

