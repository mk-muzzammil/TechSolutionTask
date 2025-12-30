import apiClient from './api';
import { Staff, ApiResponse } from '@/types';

/**
 * Get all staff members
 */
export const getAllStaff = async (): Promise<ApiResponse<Staff[]>> => {
  const response = await apiClient.get('/staff');
  return response.data;
};

/**
 * Get single staff member by ID
 */
export const getStaffById = async (id: string): Promise<ApiResponse<Staff>> => {
  const response = await apiClient.get(`/staff/${id}`);
  return response.data;
};
