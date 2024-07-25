import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
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
