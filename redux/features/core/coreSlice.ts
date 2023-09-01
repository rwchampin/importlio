// src/features/core/coreSlice.js
import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  }
  
const coreSlice = createSlice({
  name: 'core',
  initialState: {
    isLoading: 'idle',
    errors: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setLoading, setErrors } = coreSlice.actions;
export default coreSlice.reducer;
