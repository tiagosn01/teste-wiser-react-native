import axios from 'axios';

const api = axios.create({
  baseURL: 'https://602c7d9230ba720017223073.mockapi.io/wiser/v1',
});

export default api;
