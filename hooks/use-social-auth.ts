import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, setUser } from '@/redux/slices/authSlice';
import useNotification from '@/hooks/useNotification';

export default function useSocialAuth(authenticate: any, provider: string) {
	const { toggle } = useNotification();
	const dispatch = useAppDispatch();
	const router = useRouter();
	
	const effectRan = useRef(false);
	const { state, code }:any = useSearchParams()

	useEffect(() => {
		if (state && code && !effectRan.current) {
			authenticate({ provider, state, code })
				.unwrap()
				.then(() => {


					dispatch(setAuth());
					//   dispatch(setUser(userDetails)); // Assuming that the userDetails contain the user's name

					// toggle({
					// 	message: `Welcome ${user.name}`,
					// 	type: 'success',
					// });
					router.push('/dashboard');
				})
				.catch(() => {
					// toggle({
					// 	message: 'Something went wrong',
					// 	type: 'error',
					// });
						router.push('/auth/login');
					});
				}

				return () => {
					effectRan.current = true;
				}

			}, [authenticate, provider])
}
