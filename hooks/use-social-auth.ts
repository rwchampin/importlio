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
	
	const getUserDetails = async (token: string) => {
		const apiUrl = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token='+token;

		const res = await fetch(apiUrl, {
		  method: 'GET',
		  headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		  },
		});
		debugger
		const data = await res.json();
		return data;
	  };

	  useEffect(() => {
		const state = searchParams.get('state');
		const code = searchParams.get('code');
	  
		if (state && code && !effectRan.current) {
		  authenticate({ provider, state, code })
			.unwrap()
			.then(async (response: any) => {
			  const { user, access, refresh } = response;
				console.log(response)
			  // Call getUserDetails with the access token
			  const userDetails = await getUserDetails(access);

			  dispatch(setAuth());
			  dispatch(setUser(userDetails)); // Assuming that the userDetails contain the user's name
			  
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
