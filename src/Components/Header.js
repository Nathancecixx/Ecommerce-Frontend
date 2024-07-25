import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = ({ token, setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions, e.g., clearing local storage, updating state
        localStorage.removeItem('token');
        setToken(null)
        navigate('/login');
    };

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    {!token && (
                        <>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </>
                    )}
                    {token && (
                        <>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
