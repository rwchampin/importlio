'use client' // Error components must be Client Components
// import { ParticleText } from '@/components/typography' 
// import { button } from '@/app/components';
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
        {/* <ParticleText desktop="Something went wrong" mobile={'Somwdhsdhdfshjdsjh'} /> */}
      <h2>Something went wrong!</h2>
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