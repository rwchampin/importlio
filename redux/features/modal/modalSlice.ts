// src/features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalProps {
    isOpen: boolean;
    modalBody?: string | React.ReactNode | null | undefined;
    modalTitle?: string | React.ReactNode | null | undefined;
    modalFooter?: string | React.ReactNode | null | undefined;
    children?: React.ReactNode | null | undefined;
}

const initialState: ModalProps = {
    isOpen: false,
    modalBody: null,
    modalTitle: null,
    modalFooter: null,
    children: null,
}
const modalSlice = createSlice({
  name: 'modal',
initialState,
  reducers: {
    openModal(state, action) {
        state.isOpen = true;
        state.modalBody = action.payload.modalBody;
        state.modalTitle = action.payload.modalTitle;
        state.modalFooter = action.payload.modalFooter;
        },
    closeModal(state) {
        state.isOpen = false;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
