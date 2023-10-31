"use client"
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// import { scrapeGoogleSearch } from "@/lib/functions";
export default function Page() {

  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedLists, setSelectedLists] = useState<any>([])
  const [lists, setLists] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.NET_PUBLIC_HOST}/api/marketing/list-previews`)
      const { results } = await res.json()
      setLists(results)
    }

    if(!lists.length) {
      getData()
    }
  }, [])

  useLayoutEffect(() => {
    const isIndeterminate = selectedLists.length > 0 && selectedLists.length < lists.length
    setChecked(selectedLists.length === lists.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedLists])

  function toggleAll() {
    setSelectedLists(checked || indeterminate ? [] : lists)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }


  


    // console.log(data);

    // await browser.close();
    
    
  // const onEnter = () => {
  //   // Perform the fetch call here with 'chips' array
  //   const res = fetch(
  //     `${process.env.NEXT_PUBLIC_HOST}/api/marketing/get-data/`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ chips }),
  //     }
  //   )
  //     .then((res:any) => res.json())
  //     .then((data:any) => {
  //       debugger;
  //     });
  // };

  // const onComma = () => {
  //   if (value.trim() !== "") {
  //     setChips([...chips, value.replace(",", "")]);
  //     setValue("");
  //   }
  // };

  // const handleChange = (e:any) => {
  //   if (e.key === "Enter" || e.keyCode === 13) {
  //     onEnter();
  //   }

  //   if (e.key === "," || e.keyCode === 188) {
  //     onComma();
  //   }
  // };

  // Call the function to scrape the Google search page
 
  
  // const niches:any = []
  return (
  
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Marketing Lists</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            href="/dashboard/lists/create-list"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-button px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add list
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedLists.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full h-full table-fixed divide-y divide-gray-300">
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
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
              {lists.length === 0 && (<h1>Sorry, no lists have been made yet.</h1>)}

                  {lists.length > 0 && lists.map((list:any) => (
                    <tr key={list.id} className={selectedLists.includes(list) ? 'bg-gray-50' : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedLists.includes(list) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={list.name}
                          checked={selectedLists.includes(list)}
                          onChange={(e) =>
                            selectedLists(
                              e.target.checked
                                ? [...selectedLists, list]
                                : selectedLists.filter((p) => p !== list)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedLists.includes(list) ? 'text-indigo-600' : 'text-gray-900'
                        )}
                      >
                        {list.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{list.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{list.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{list.role}</td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {list.name}</span>
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
 

  );
}
