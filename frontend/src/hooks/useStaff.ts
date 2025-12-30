import { useQuery } from '@tanstack/react-query';
import { getAllStaff, getStaffById } from '@/services';
import { queryKeys } from '@/lib/react-query';

/**
 * Custom hook for fetching all staff members
 * Handles query logic and caching
 */
export const useStaff = () => {
  const query = useQuery({
    queryKey: queryKeys.staff.lists(),
    queryFn: getAllStaff,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    staff: query.data?.data || [],
    count: query.data?.count || 0,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};

/**
 * Custom hook for fetching a single staff member by ID
 */
export const useStaffMember = (id: string) => {
  const query = useQuery({
    queryKey: queryKeys.staff.detail(id),
    queryFn: () => getStaffById(id),
    enabled: !!id,
  });

  return {
    staffMember: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
