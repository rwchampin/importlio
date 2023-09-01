'use client';
// import Spinner from '@/app/components/Spinner';

export default function Page() {

 

	// if (isLoading || isFetching) {
	// 	return (
	// 		<div className='flex justify-center my-8'>
	// 			<Spinner lg />
	// 		</div>
	// 	);
	// }

	return (
		<>
			<section className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Dashboard
					</h1>
				</div>
			</section>
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
                <div className='px-4 py-6 sm:px-0'>
                    <h2 className='text-lg font-medium text-gray-900'>Account Information</h2>
                    <p className='mt-1 text-sm text-gray-500'>
                        Personal details and application.
                    </p>
                </div>
                
			</main>
		</>
	);
}
