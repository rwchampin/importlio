import { createSlice } from '@reduxjs/toolkit';
import { User} from '@/lib/constants';

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
		setAuth: state => {
			state.isAuthenticated = true;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		logout: state => {
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout,setUser, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
