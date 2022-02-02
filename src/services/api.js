import axios from 'axios';

export const key = "fb739d12781ee8fb19c8bc4972a3f2e5f9991d1e";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;