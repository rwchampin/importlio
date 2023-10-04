// src/features/core/coreSlice.js
import { createSlice } from '@reduxjs/toolkit';

 
  
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
 
    modalOpen: false,
  },
  reducers: {
   
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    openModal: (state) => {
      state.modalOpen = true;
    }
  },
});


export const { 
 
  toggleModal,
  closeModal,
  openModal,
} = modalSlice.actions;
export default modalSlice.reducer;
