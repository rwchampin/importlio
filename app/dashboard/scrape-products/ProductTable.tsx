
import { useLayoutEffect, useRef, useState } from 'react'

 

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductTable({
    products
}:any) {
  const checkbox = useRef<any>(null)
  const [checked, setChecked] = useState<any>(false)
  const [indeterminate, setIndeterminate] = useState<any>(false)
  const [selectedProducts, setSelectedProducts] = useState<any>([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedProducts.length > 0 && selectedProducts.length < products.length
    setChecked(selectedProducts.length === products.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedProducts])

  function toggleAll() {
    setSelectedProducts(checked || indeterminate ? [] : products)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
       
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedProducts.length > 0 && (
                <div className="absolute top-0 right-12 flex h-12 items-center space-x-3 bg-gray-50">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-green-800 bg-green-500 px-2.5 py-1.5 text-xs font-medium text-green-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Import Selected
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-red-500 bg-red-300 px-2.5 py-1.5 text-xs font-medium text-red-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete Selected
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-red-800 bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Clear All
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Img
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      ASIN
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Rating
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Reviews
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((product:any) => (
                    <tr key={product.email} className={selectedProducts.includes(product) ? 'bg-gray-50' : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedProducts.includes(product) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={product.email}
                          checked={selectedProducts.includes(product)}
                          onChange={(e:any) =>
                            setSelectedProducts(
                              e.target.checked
                                ? [...selectedProducts, product]
                                : selectedProducts.filter((p:any) => p !== product)
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <img src={product.image} alt="" className="w-10 h-10 rounded-full" />
                        </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium w-[300px] overflow-hidden text-ellipsis ...',
                          selectedProducts.includes(product) ? 'text-indigo-600' : 'text-gray-900'
                        )}
                      >
                        {product.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.asin}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.rating}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.reviews}</td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {product.title}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
