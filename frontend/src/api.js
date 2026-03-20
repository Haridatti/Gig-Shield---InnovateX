import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const registerUser = (data) => API.post('/register', data);
export const selectPlan = (data) => API.post('/select-plan', data);
export const simulateTrigger = (data) => API.post('/trigger-event', data);
export const getDashboard = (userId) => API.get(`/dashboard/${userId}`);
