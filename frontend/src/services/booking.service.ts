import apiClient from './api';
import { BookingFormData, ApiResponse, Booking } from '@/types';

/**
 * Create a new booking
 */
export const createBooking = async (bookingData: BookingFormData): Promise<ApiResponse<Booking>> => {
  const response = await apiClient.post('/bookings', bookingData);
  return response.data;
};

/**
 * Get all bookings
 */
export const getAllBookings = async (): Promise<ApiResponse<Booking[]>> => {
  const response = await apiClient.get('/bookings');
  return response.data;
};

/**
 * Get single booking by ID
 */
export const getBookingById = async (id: string): Promise<ApiResponse<Booking>> => {
  const response = await apiClient.get(`/bookings/${id}`);
  return response.data;
};
