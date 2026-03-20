import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const selectPlan = (data) => axios.post(`${API_URL}/select-plan`, data);
export const simulateTrigger = (data) => axios.post(`${API_URL}/trigger-event`, data);
export const getDashboard = (userId) => axios.get(`${API_URL}/dashboard/${userId}`);
