/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { MdAddShoppingCart } from 'react-icons/md'
 
 
export default function Empty() {
    return (
      <button
        type="button"
        className="relative block w-full max-w-lg mx-auto   my-5 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <MdAddShoppingCart className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
        <span className="mt-2 block text-sm font-medium text-gray-900">
            Add a product
        </span>
      </button>
    )
  }
  