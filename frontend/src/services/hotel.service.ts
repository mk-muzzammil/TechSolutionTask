import apiClient from './api';
import { ApiResponse, Hotel } from '@/types';

/**
 * Get all hotels from the API
 */
export const getAllHotels = async (): Promise<ApiResponse<Hotel[]>> => {
  const response = await apiClient.get<ApiResponse<Hotel[]>>('/hotels');
  return response.data;
};

/**
 * Get a single hotel by ID
 */
export const getHotelById = async (id: string): Promise<ApiResponse<Hotel>> => {
  const response = await apiClient.get<ApiResponse<Hotel>>(`/hotels/${id}`);
  return response.data;
};
