'use client';

import { useSocialAuthenticateMutation } from '@/redux/slices/apiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/app/_components';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');

	return (
		<div className='my-8'>
			<Spinner lg />
		</div>
	);
}
