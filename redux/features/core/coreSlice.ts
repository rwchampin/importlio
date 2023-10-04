// src/features/core/coreSlice.js
import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
    showRecentPostsInFooter: boolean;
  }
  
const coreSlice = createSlice({
  name: 'core',
  initialState: {
    showRecentPostsInFooter: true,
 
  },
  reducers: {
    setShowRecentPostsInFooter: (state, action) => {
      state.showRecentPostsInFooter = action.payload;
    },
 
  },
});


export const { 
  setShowRecentPostsInFooter,
 
} = coreSlice.actions;
export default coreSlice.reducer;
