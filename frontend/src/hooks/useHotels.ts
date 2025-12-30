import { useQuery } from '@tanstack/react-query';
import { getAllHotels, getHotelById } from '@/services';
import { queryKeys } from '@/lib/react-query';

/**
 * Custom hook for fetching all hotels
 * Handles query logic and caching with automatic refetching
 */
export const useHotels = () => {
  const query = useQuery({
    queryKey: queryKeys.hotels.lists(),
    queryFn: getAllHotels,
    staleTime: 30 * 1000, // Data is fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch when user focuses the window/tab
    refetchInterval: 60 * 1000, // Auto-refetch every 60 seconds
    refetchIntervalInBackground: false, // Don't refetch when tab is not visible
  });

  return {
    hotels: query.data?.data || [],
    count: query.data?.count || 0,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};

/**
 * Custom hook for fetching a single hotel by ID
 * Includes automatic refetching for real-time updates
 */
export const useHotel = (id: string) => {
  const query = useQuery({
    queryKey: queryKeys.hotels.detail(id),
    queryFn: () => getHotelById(id),
    enabled: !!id,
    staleTime: 30 * 1000, // Data is fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch when user focuses the window/tab
    refetchInterval: 60 * 1000, // Auto-refetch every 60 seconds
  });

  return {
    hotel: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
