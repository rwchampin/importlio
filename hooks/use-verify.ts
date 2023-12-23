import { useEffect } from 'react';
import { 
	useAppDispatch,
 } from '@/redux/hooks';


import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();
	// const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
	const [verify] = useVerifyMutation();

	useEffect(() => {

			verify(undefined)
				.unwrap()
				.then((res) => { 
					dispatch(setAuth());
				})
				.finally(() => {
					dispatch(finishInitialLoad());
				});

	}, []);

}



