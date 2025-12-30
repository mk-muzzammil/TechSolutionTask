// Common types and interfaces for the application

// Validation Error Type
export interface ValidationError {
  field: string;
  message: string;
}

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
  errors?: ValidationError[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
  errors?: ValidationError[];
}

// Staff Types
export interface Staff {
  id: string;
  name: string;
  role: string;
  image: string;
}

// Hotel Types
export interface Hotel {
  id: string;
  title: string;
  price: number;
  guests: number;
  beds: number;
  bath: number;
  image: string;
  description: string;
}

// Add your custom types here as needed
