'use client' // Error components must be Client Components


import Button from '@/app/components/buttons/Button';


import {ScrollShadow} from "@nextui-org/react";

export default function Error({error, reset}) {
 


	return (
		<ScrollShadow className="w-[100vw] h-[400px]">
		<div className='flex-auto flex flex-col items-center justify-center'>fuck
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
		</ScrollShadow>
	)
}