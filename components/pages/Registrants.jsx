"use client"
import { useAnalytics } from "@/store";
import { CgProfile } from "react-icons/cg";
export default function Registrants() {
    const { registrants } = useAnalytics();

    const headers = [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'edit',
            label: 'Edit'
        }
    ]

    if( registrants.length <= 0 ) {
         return (
        <div className="flex flex-col items-center justify-center h-full rounded-xl border-dashed border-2 border-gray-8 gap-5">
            <CgProfile className="w-12 h-12 text-gray-600 animate-pulse" />
            <p className="text-heading-4 max-w-lg">
                No Registrants yet, check back later.
            </p>
        </div>
    )
    }

    return (

      

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">

                                    <tr>
                                        <th>
                                        <div className="inline-flex items-center  p-4">

                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                </div>
                                        </th>
                                        {headers.map((header) => {
                                            return (
                                                <th key={header.key} scope="col" className="py-4 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                        {header.label} 

                                                </th>
                                            )
                                        }
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {registrants.map((registrant, idx) => {
                                        return (
                                            <tr
                                                key={idx}
                                            >
                                                <td className=" p-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">
                                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                        
                                                    </div>
                                                </td>
                                                <td className=" p-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            {registrant.id}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {registrant.email}
                                                </td>
                                                 
                                                <td className=" p-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">
                                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>

                                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

          

    )
}