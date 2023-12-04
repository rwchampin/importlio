'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import ShadowText from './components/typography/ShadowText'
import BasePage from './components/BasePage'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  debugger
  return (
    <BasePage
      title={`Error: ${error.statusCode}`}
      subtitle={error.message}
      headline={`Error`}
      shadowText={error.statusCode}
      size="md"
    >
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </BasePage>
  )
}