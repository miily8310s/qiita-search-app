import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://qiita.com/api/v2/items?page=1&per_page=20',
  headers: { 'Content-Type': 'application/json' },
});
