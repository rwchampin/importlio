import { createSlice } from '@reduxjs/toolkit';
import { User} from '@/lib/constants';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | null;
	refresh: string | null;
	access: string | null;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	refresh: null,
	access: null,
	user: null,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuthenticated = true;
			state.refresh = action.payload.refresh;
			state.access = action.payload.access;
			state.user = action.payload.user;
		},
		logout: state => {
			state.isAuthenticated = false;
			state.refresh = null;
			state.access = null;
			state.user = null;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
