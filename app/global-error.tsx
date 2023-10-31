'use client'
 
export default function GlobalError({
  error,
  reset,
}:any) {

  return (
    <div 
    className='flex flex-col items-center justify-center h-[calc(100vh-5rem)] min-h-screen w-full bg-blue-400'
  >
    <div className='text-heading-1'>Something went wrong! global</div>
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