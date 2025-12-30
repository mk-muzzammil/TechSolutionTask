// Common types and interfaces for the application

// Booking Types
export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectType: string;
  selectRoom: string;
  checkIn: string;
  checkOut: string;
  message?: string;
}

export interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectType: string;
  selectRoom: string;
  checkIn: string;
  checkOut: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data?: Booking;
  errors?: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
  errors?: string[];
}

// Add your custom types here as needed
