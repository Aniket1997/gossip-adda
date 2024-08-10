import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Base URL of your backend API

// Function to handle user login
export const loginUserAPI = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  } catch (error) {
    console.error('Login API error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || error.message || 'Failed to login');
  }
};

// Function to handle user registration
export const registerUserAPI = async (userData) => {
  console.log(userData);

  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    console.error('Register API error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || error.message || 'Failed to register');
  }
};
