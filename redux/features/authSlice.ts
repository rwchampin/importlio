import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	user: null
} as any;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuthenticated = true;
		},
		setUser: (state, action) => {
			state.user = action.payload.user;
		},
		logout: state => {
			state.isAuthenticated = false;
			state.user = null;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth,setUser, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
