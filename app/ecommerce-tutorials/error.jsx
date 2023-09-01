'use client' // Error components must be Client Components


import Button from '@/app/components/buttons/Button';


export default function Error({error, reset}) {
 


	return (
		<div className='flex-auto flex flex-col items-center justify-center'>
			<div className='text-heading-1'>Something went wrong!</div>
			<p>{error.error}</p>

			<Button
				className='mt-5 max-w-xl mx-auto'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}

			>
				Try again
			</Button>
		</div>
	)
}