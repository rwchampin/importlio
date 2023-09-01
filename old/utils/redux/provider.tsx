'use client';

import { store } from './store';
import { Provider } from 'react-redux';
import { ModalProvider } from '@/store';
interface Props {
	children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
	return <Provider store={store}><ModalProvider>{children}</ModalProvider></Provider>;
}
