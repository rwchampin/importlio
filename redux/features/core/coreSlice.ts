// src/features/core/coreSlice.js
import { createSlice } from '@reduxjs/toolkit';
  
const coreSlice = createSlice({
  name: 'core',
  initialState: {
    banner: {
      title: '',
      message: '',
      location: null
    },
  },
  reducers: {
    setBanner: (state:any, action:any) => {
      state.banner = action.payload;
    }
  },
});


export const { 
  setBanner
 
} = coreSlice.actions;
export default coreSlice.reducer;
