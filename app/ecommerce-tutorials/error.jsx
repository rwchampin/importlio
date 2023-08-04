'use client' // Error components must be Client Components

import {useEffect} from 'react'
import { Primary } from '../components'
export default function Error({error, reset}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [ error ])


	return (
		<div>
			<div className='text-heading-1'>Something went wrong!</div>
			<p>{error.error}</p>

			<Primary
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}

			>
				Try again
			</Primary>
		</div>
	)
}