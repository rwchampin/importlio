import { createSlice } from '@reduxjs/toolkit';
import { User} from '@/lib/constants';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: any | null | undefined;
	refresh: any
	access: any
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
		setAuth: (state) => {
			state.isAuthenticated = true;
		},
		setTokens: (state:any, payload:any):any => {
			if(payload.refresh)
				state.refresh = payload.refresh;
			if(payload.access)
				state.access = payload.access;
		},
		setFullAuth: (state, payload:any) => {
			state.isAuthenticated = true;
			state.refresh = payload.refresh;
			state.access = payload.access;
			state.user = payload.user;
		},
		setUser: (state, payload:any) => {
			state.user = payload.payload;
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

export const { setAuth,setUser, logout, finishInitialLoad,setFullAuth, setTokens } = authSlice.actions;
export default authSlice.reducer;
