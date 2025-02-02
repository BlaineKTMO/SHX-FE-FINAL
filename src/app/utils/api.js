// app/utils/api.js
const API_BASE_URL = 'http://localhost:5000/api'; // Flask backend URL

// Fetch all users
export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

// Create a new user
export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
};

// Fetch a single user by ID
export const getUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};

// Update a user
export const updateUser = async (userId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return response.json();
};

// Delete a user
export const deleteUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
  return response.json();
};

// Sign in a user
export const signIn = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/users/search?email=${email}&password=${password}`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to sign in');
  }
  return response.json();
};
