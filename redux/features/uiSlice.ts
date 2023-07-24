import { createSlice } from '@reduxjs/toolkit';

interface UIState {
	colorMode: 'light' | 'dark';
	openModal: boolean;
}

const initialState = {
    colorMode: 'light',
	openModal: false
} as UIState;

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setColorMode: (state, action) => {
            state.colorMode = action.payload;
		},
		setModal: (state, action)=> {
            state.openModal = action.payload;
		},
		toggleModal: (state) => {
			state.openModal = !state.openModal;
		}
	},
});

export const { setColorMode, toggleModal, setModal } = uiSlice.actions;
export default uiSlice.reducer;