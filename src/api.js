import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error.response ? error.response.data : error.message);
        throw error;
    }
};
export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

export const createOrder = async (orderData, token) => {
    const response = await axios.post(`${API_URL}/orders`, orderData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};


// Ensure you have the correct imports for axios and API_URL

export const getCart = async (token) => {
    const response = await axios.get(`${API_URL}/cart`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const addToCart = async (productId, quantity, token) => {
    try {
        const response = await axios.post(`${API_URL}/cart`, { productId, quantity }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product to cart:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const removeFromCart = async (productId, token) => {
    const response = await axios.delete(`${API_URL}/cart/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};


export const editFromCart = async (productId, quantity, token) => {
    const response = await axios.put(`${API_URL}/cart/${productId}`, { quantity },{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};