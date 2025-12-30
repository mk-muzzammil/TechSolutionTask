import { useQuery } from '@tanstack/react-query';
import { getAllBookings } from '@/services';
import { queryKeys } from '@/lib/react-query';

/**
 * Custom hook for fetching all bookings
 * Handles query logic and caching
 */
export const useBookings = () => {
  const query = useQuery({
    queryKey: queryKeys.bookings.lists(),
    queryFn: getAllBookings,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    bookings: query.data?.data || [],
    count: query.data?.count || 0,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};

/**
 * Custom hook for fetching a single booking by ID
 */
export const useBooking = (id: string) => {
  const query = useQuery({
    queryKey: queryKeys.bookings.detail(id),
    queryFn: () => import('@/services').then(m => m.getBookingById(id)),
    enabled: !!id,
  });

  return {
    booking: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
