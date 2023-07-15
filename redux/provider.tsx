'use client';

import { store } from './store';
import { Provider } from 'react-redux';

interface Props {
	children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
	console.log('store', store.getState())
	return <Provider store={store}>{children}</Provider>;
}
