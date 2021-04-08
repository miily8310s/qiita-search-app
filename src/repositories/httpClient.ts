import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://qiita.com/api/v2/items',
  headers: { 'Content-Type': 'application/json' },
});
