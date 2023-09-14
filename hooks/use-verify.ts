import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();
	const {isAuthenticated} = useAppSelector(state => state.auth);

	const [verify] = useVerifyMutation();

	useEffect(() => {
		// if (isAuthenticated) {
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
		// } else {
		// 	dispatch(finishInitialLoad());
		// }
	}, []);
}
