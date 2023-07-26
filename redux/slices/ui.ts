import { createSlice } from '@reduxjs/toolkit';

interface UIState {
	colorMode: 'light' | 'dark';
	isModalOpen: boolean;
	modalErrors: boolean;
	modalErrorsMessage: string;
}

const initialState = {
    colorMode: 'light',
	isModalOpen: false
} as UIState;

const ui = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setColorMode: (state, action) => {
            state.colorMode = action.payload;
		},
		setModal: (state, action)=> {
            state.isModalOpen = action.payload;
		},
		toggleModal: (state) => {
			state.isModalOpen = !state.isModalOpen;
		},
		setModalErrors: (state) => {
			state.modalErrors = true;
			state.modalErrorsMessage = 'Failed to register email.';
		}
	},
});

export const { setColorMode, toggleModal, setModal } = ui.actions;
export default ui.reducer;