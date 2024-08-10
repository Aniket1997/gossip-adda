const API_URL = 'http://localhost:5000/api';

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Login failed');
    }

    return data;
  } catch (error) {
    console.error('Error logging in user:', error.message);
    throw error;
  }
};
