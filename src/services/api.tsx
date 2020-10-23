import axios from 'axios';

export const api = axios.create({
  // DEVELOPMENT MODE
  baseURL: 'http://localhost:3333',
  // PRODUCTION MODE
  // baseURL: 'https://market-place-backend.herokuapp.com/',
})