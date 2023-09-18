import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';
import { getUser } from '@/lib/api';

export default function useVerify() {
	const dispatch = useAppDispatch();
	const { access, isLoading } = useAppSelector(state => state.auth);

	const [verify] = useVerifyMutation();

	useEffect(() => {
		if (access) {
			verify(undefined)
				.unwrap()
				.then(() => {

					const user = getUser(access).then((res) => {
						dispatch(setAuth());

					})
						.finally(() => {
							dispatch(finishInitialLoad());
						});
				})
		} else {
			if (isLoading) {
				dispatch(finishInitialLoad());
			}
		}
	}, []);
}
