// React Query configuration
import { QueryClient, DefaultOptions } from '@tanstack/react-query';
import { QUERY_STALE_TIME, QUERY_CACHE_TIME } from '@/constants';

/**
 * Default options for React Query
 */
const queryConfig: DefaultOptions = {
  queries: {
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_CACHE_TIME,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: 0,
  },
};

/**
 * Create QueryClient instance
 */
export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

/**
 * Query keys - Add your query keys here as needed
 * Example: users: { all: ['users'] as const }
 */
export const queryKeys = {
  // Add your query keys here
} as const;
