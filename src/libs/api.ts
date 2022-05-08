import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://feedget-server-production-1340.up.railway.app'
})