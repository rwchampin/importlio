'use client';
// import Spinner from '@/app/components/Spinner';
import { useAppSelector } from '@/redux/hooks';

import { useEffect, useState } from 'react';
export default function Page() {
	const [ useracount , setUseracount ] = useState(null)
	const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (!useracount && user) {
			setUseracount(user)
			debugger
		}
	}, [user]);

	// if (isLoading || isFetching) {
	// 	return (
	// 		<div className='flex justify-center my-8'>
	// 			<Spinner lg />
	// 		</div>
	// 	);
	// }

	return (
		 
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
                <div className='px-4 py-6 sm:px-0'>
                    <h2 className='text-lg font-medium text-gray-900'>Account Information</h2>
                    <p className='mt-1 text-sm text-gray-500'>
                        Personal details and application.
                    </p>
                </div>

			{useracount && (<div className='px-4 py-6 sm:px-0'>
				<h1>{useracount.name}</h1>
			</div>)}
			</main>
		 
	);
}
