import { create } from 'zustand';
import { Hotel } from '@/types';

interface HotelState {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setHotels: (hotels: Hotel[]) => void;
  setSelectedHotel: (hotel: Hotel | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useHotelStore = create<HotelState>((set) => ({
  hotels: [],
  selectedHotel: null,
  isLoading: false,
  error: null,
  
  setHotels: (hotels) => set({ hotels }),
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));
