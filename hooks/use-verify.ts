import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(({access, refresh}) => {
				dispatch(setAuth({
					access,
					refresh,
				}));
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, []);
}
