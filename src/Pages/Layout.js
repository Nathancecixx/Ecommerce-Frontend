import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header'; // Import Header component

const Layout = ({ token, setToken }) => {
    return (
        <>
            <Header token={token} setToken={setToken}/> {/* Pass states to Header */}
            <Outlet />
        </>
    );
};

export default Layout;
