import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBooking } from '@/services';
import { BookingFormData, ValidationError } from '@/types';
import { useBookingStore } from '@/store';

interface UseCreateBookingOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Custom hook for creating a booking
 * Handles mutation logic, state updates, and side effects
 */
export const useCreateBooking = (options?: UseCreateBookingOptions) => {
  const queryClient = useQueryClient();
  const { setSuccessMessage, setErrorMessage, setBackendErrors, clearMessages } = useBookingStore();

  const mutation = useMutation({
    mutationFn: (data: BookingFormData) => createBooking(data),
    
    onSuccess: () => {
      // Set success message in store
      setSuccessMessage('Booking submitted successfully! We will contact you soon.');
      
      // Invalidate bookings query to refetch data
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      
      // Call custom onSuccess callback if provided
      options?.onSuccess?.();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        clearMessages();
      }, 5000);
    },
    
    onError: (error: Error & { response?: { data?: { message?: string; errors?: ValidationError[] } } }) => {
      // Extract error message and errors array from response
      const errorMsg = error.response?.data?.message || 'Failed to submit booking. Please try again.';
      const errors = error.response?.data?.errors || [];
      
      // Set error message in store
      setErrorMessage(errorMsg);
      
      // Set backend validation errors if available
      if (errors.length > 0) {
        setBackendErrors(errors);
      }
      
      // Call custom onError callback if provided
      options?.onError?.(error);
    },
    
    onMutate: () => {
      // Clear any existing messages before starting
      clearMessages();
    },
  });

  return {
    createBooking: mutation.mutate,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
