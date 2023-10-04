"use client";
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // Import Redux Thunk

import {apiSlice}  from '@/redux/services/api';

import authReducer from './features/authSlice';
import coreSlice from './features/core/coreSlice';
import blogSlice from './features/blog/blogSlice';
import modalSlice from './features/modal/modalSlice';
import debugSlice from './features/debug/debugSlice';



export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		core: coreSlice,
		blog: blogSlice,
		modal: modalSlice,
		debug: debugSlice,

	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];
