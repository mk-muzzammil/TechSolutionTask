import { create } from 'zustand';
import { Staff } from '@/types';

interface StaffState {
  // Staff data
  staffMembers: Staff[];
  selectedStaff: Staff | null;
  
  // Loading states
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  
  // Actions
  setStaffMembers: (staff: Staff[]) => void;
  setSelectedStaff: (staff: Staff | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
  setErrorMessage: (message: string) => void;
  resetStaffState: () => void;
}

const initialState = {
  staffMembers: [],
  selectedStaff: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const useStaffStore = create<StaffState>((set) => ({
  ...initialState,
  
  setStaffMembers: (staff) => 
    set({ staffMembers: staff }),
  
  setSelectedStaff: (staff) => 
    set({ selectedStaff: staff }),
  
  setIsLoading: (isLoading) => 
    set({ isLoading }),
  
  setIsError: (isError) => 
    set({ isError }),
  
  setErrorMessage: (message) => 
    set({ errorMessage: message }),
  
  resetStaffState: () => 
    set(initialState),
}));
