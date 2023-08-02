import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | null;
}



const initialState = {
	isAuthenticated: false,
	isLoading: true,
	user: null,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuthenticated = true;
		},
		 
		logout: state => {
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
		 setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		 
	},
});

export const { setAuth, logout, finishInitialLoad, setUser } = authSlice.actions;
export default authSlice.reducer;