import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Our Ecommerce Site!</h1>
            <p>Discover the best products at unbeatable prices.</p>
            <Link to="/register">Get Started</Link>
        </div>
    );
};

export default LandingPage;
