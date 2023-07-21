import { createSlice } from '@reduxjs/toolkit';

interface UIState {
	colorMode: 'light' | 'dark';
}

const initialState = {
    colorMode: 'light',
} as UIState;

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setColorMode: (state, action) => {
            state.colorMode = action.payload.colorMode;
		},

	},
});

export const { setColorMode } = uiSlice.actions;
export default uiSlice.reducer;