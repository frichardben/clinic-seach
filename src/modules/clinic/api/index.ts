import axios from 'axios';

const baseURL = 'https://storage.googleapis.com/scratchpay-code-challenge';

export const api = axios.create({
  baseURL: baseURL
});
