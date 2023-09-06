// src/features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode | null | undefined;
}

const initialState: ModalProps = {
    isOpen: false,
    children: null,
}
const modalSlice = createSlice({
  name: 'modal',
initialState,
  reducers: {
    openModal(state) {
        state.isOpen = true;
        },
    closeModal(state) {
        state.isOpen = false;
    },
    toggleModal(state) {
        state.isOpen = !state.isOpen;
    }
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
