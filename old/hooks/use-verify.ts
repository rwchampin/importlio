import { useEffect } from 'react';
import { useAppDispatch } from '@/old/utils/redux/hooks';
import { setAuth, finishInitialLoad } from '@/old/utils/redux/features/authSlice';
import { useVerifyMutation } from '@/old/utils/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(() => {
				dispatch(setAuth());
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, []);
}
