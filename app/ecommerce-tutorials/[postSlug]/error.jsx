'use client' // Error components must be Client Components

import ParticleText from '@/app/components/typography/ParticleText'
import {useEffect} from 'react'

export default function Error({error, reset}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [ error ])

	return (
		<div 
			className='flex flex-col items-center justify-center h-full bg-blue-400'
		>
			{/* <ParticleText
				desktop='Error'
				mobile="Error"
			/> */}
			<div className='text-heading-1'>Something went wrong!</div>
			<p>ERRORL:{error.error}</p>

			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	)
}