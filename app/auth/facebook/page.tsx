'use client';

import { useSocialAuthenticateMutation } from '@/redux/slices/apiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/app/components/';

export default function Page() {
	const [facebookAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(facebookAuthenticate, 'facebook');

	return (
		<div className='my-8'>
			<Spinner lg />
		</div>
	);
}
