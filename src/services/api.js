import axios from 'axios';

console.lop(process.env.REACT_APP_BACKEND);

const api = axios.create({ baseURL: process.env.REACT_APP_BACKEND });

export default api;
