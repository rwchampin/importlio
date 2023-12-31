'use client';

import { redirect } from 'next/navigation';

import useAuth  from '@/hooks/use-auth';
import  Spinner  from '@/app/components/Spinner';

interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const { isAuthenticated, isLoading } = useAuth();

	if (isLoading === true) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	// if (!isAuthenticated && !isLoading) {
	// 	redirect('/auth/login');
	// }

	return <>{children}</>;
}
