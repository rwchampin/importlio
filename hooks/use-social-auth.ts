import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, setUser } from '@/redux/slices/authSlice';
import { toast } from 'react-toastify';

export default function useSocialAuth(authenticate: any, provider: string) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();

	const effectRan=useRef(false);
	
	const getUserDetails=async (token: string) => {
		debugger
		const res=await fetch('https://www.googleapis.com/oauth2/v3/'+token,{
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});
		const data=await res.json();
		return data;
	}

	useEffect(() => {
		const state = searchParams.get('state');
		const code = searchParams.get('code');

		if (state && code && !effectRan.current) {
			authenticate({ provider, state, code })
				.unwrap()
				.then((response: any) => {
					const {user,access,refresh}=response;
						dispatch(setAuth());
						dispatch(setUser(response));
					
					toast.success('Logged in');
					router.push('/dashboard');
				})
				.catch(() => {
					toast.error('Failed to log in');
					router.push('/auth/login');
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [authenticate, provider]);
}
