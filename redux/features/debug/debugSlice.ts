// src/features/debug/debugSlice.js
import { createSlice } from '@reduxjs/toolkit';

 
const debugSlice = createSlice({
  name: 'debug',
  initialState: {
    debugMode: process.env.NODE_ENV !== 'production',
 
  },
  reducers: {
    toggleDebug: (state) => {
      state.debugMode = !state.debugMode;
    },
    setDebugMode: (state, action) => {
      state.debugMode = action.payload;
    },
 
  },
});


export const { 
    toggleDebug,
    setDebugMode,
} = debugSlice.actions;
export default debugSlice.reducer;
