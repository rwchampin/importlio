import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
} as any;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state) => {debugger
			state.isAuthenticated = true;
		},
		logout: state => {debugger
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
