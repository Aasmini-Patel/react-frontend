import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userName, email, password) => {
  try {
    const response = await api.post('auth/register', { userName, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userName, password) => {
  try {
    const response = await api.post('auth/login', { userName, password });
    const userId = response.data.user._id;
    localStorage.setItem('userId', userId);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadBlog = async (name, file, description) => {
  try {
    const formData = new FormData();
    
      formData.append('image', file);
      formData.append('name', name);
      formData.append('description', description);
    
    const response = await api.post('blog/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

