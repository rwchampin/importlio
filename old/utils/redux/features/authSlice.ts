import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	requiresRefreshOrVerification: boolean;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	requiresRefreshOrVerification: false,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			state.isAuthenticated = true;
		},
		logout: state => {
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
		setRequiresRefreshOrVerification: (state, action) => {
			state.requiresRefreshOrVerification = action.payload;
		}
	},
});

export const { setAuth, logout, finishInitialLoad, setRequiresRefreshOrVerification } = authSlice.actions;
export default authSlice.reducer;
