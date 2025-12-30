import { create } from 'zustand';
import { BookingFormData, ValidationError } from '@/types';

interface BookingState {
  // Messages
  successMessage: string;
  errorMessage: string;
  backendErrors: ValidationError[];
  
  // Form state
  isSubmitting: boolean;
  currentBooking: BookingFormData | null;
  
  // Actions
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
  setBackendErrors: (errors: ValidationError[]) => void;
  clearMessages: () => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setCurrentBooking: (booking: BookingFormData | null) => void;
  resetBookingState: () => void;
}

const initialState = {
  successMessage: '',
  errorMessage: '',
  backendErrors: [],
  isSubmitting: false,
  currentBooking: null,
};

export const useBookingStore = create<BookingState>((set) => ({
  ...initialState,
  
  setSuccessMessage: (message) => 
    set({ successMessage: message, errorMessage: '', backendErrors: [] }),
  
  setErrorMessage: (message) => 
    set({ errorMessage: message, successMessage: '' }),
  
  setBackendErrors: (errors) => 
    set({ backendErrors: errors, successMessage: '' }),
  
  clearMessages: () => 
    set({ successMessage: '', errorMessage: '', backendErrors: [] }),
  
  setIsSubmitting: (isSubmitting) => 
    set({ isSubmitting }),
  
  setCurrentBooking: (booking) => 
    set({ currentBooking: booking }),
  
  resetBookingState: () => 
    set(initialState),
}));
