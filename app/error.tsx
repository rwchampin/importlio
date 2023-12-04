'use client' // Error components must be Client Components
 

import BasePage from './components/BasePage'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  debugger
  return (
    <BasePage
      title={`Error: ${error.message}`}
      subtitle={'An error occurred while rendering the page'}
      headline={`Error`}
      shadowText={`Error`}
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