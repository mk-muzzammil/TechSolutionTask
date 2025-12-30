// Axios API configuration
import axios, { AxiosInstance } from 'axios';
import { NEXT_PUBLIC_API_BASE_URL, API_TIMEOUT } from '@/constants';

/**
 * Create axios instance with default config
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default apiClient;
