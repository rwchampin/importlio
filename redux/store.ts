import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import uiReducer  from './slices/ui';
import authReducer from './slices/authSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		ui: uiReducer,

	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];