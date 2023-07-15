import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | null; // Add user property
  }

interface User {
	id: number;
	email: string;
}

interface PayloadAction<T> {
	payload: T;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<User>) => {
			debugger
			state.isAuthenticated = true;
			state.user = action.payload; // Update user property
		  },
		logout: state => {
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
