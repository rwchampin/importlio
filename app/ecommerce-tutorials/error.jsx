'use client' // Error components must be Client Components


import Button from '@/app/components/buttons/Button';


import {ScrollShadow} from "@nextui-org/react";	

export default function Error({error, reset}) {
 


	return (

		<div className='flex-auto flex flex-col items-center justify-center'>
			<div className='text-heading-1'>Something went wrong!</div>
			<p>{error.error}</p>

			<div className='flex gap-2'>
			<Button
			variant='bordered'
				className='mt-5 max-w-3xl mx-auto h-input'
				href='/'

			>
				Go Home
			</Button>
			<Button
				className='mt-5 max-w-3xl mx-auto bg-button text-offwhite h-input'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}

			>
				Try again
			</Button>
			</div>
		</div>

	)
}