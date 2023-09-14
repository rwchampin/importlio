"use client";
import { configureStore } from '@reduxjs/toolkit';

import { api } from './services/api';

import authReducer from './features/authSlice';
import coreSlice from './features/core/coreSlice';
import blogSlice from './features/blog/blogSlice';
import modalSlice from './features/modal/modalSlice';


export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
		core: coreSlice,
		modal: modalSlice,
		blog: blogSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];
