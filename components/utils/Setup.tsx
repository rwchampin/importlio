'use client';

import { useVerify } from '@/hooks';
import { ToastContainer } from 'react-toastify';
import {onLCP, onFID, onCLS} from 'web-vitals/attribution';

import Alert from '@/components/common/Alert';
import 'react-toastify/dist/ReactToastify.css';

export default function Setup() {
	useVerify();
 
	return (
		<>
			<ToastContainer />
			<Alert />
		</>
	)
}
