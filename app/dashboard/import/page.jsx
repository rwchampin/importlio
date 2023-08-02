"use client";
import {useState} from 'react'
import { Tab } from '@headlessui/react'
// import { CSVUploader } from '@/components/forms'
function className(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export default function Page() {
  let [categories] = useState({
    Single: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Bulk: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  })

  return (
    <div className="w-full h-full flex-1 px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                className(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 flex-1">
           <Tab.Panel

              className={classNames(
                'rounded-xl bg-white p-3 flex-1',
                'flex-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              
            <form>
              <div className="flex flex-col gap-5 mb-4">
                <input className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" placeholder="Name" />
                <button className="bg-black text-white mx-auto rounded-lg" type="submit">Submit</button>
              </div>
            </form>
            </Tab.Panel>
           <Tab.Panel

              className={classNames(
                'rounded-xl bg-white p-3 flex-1',
                'flex-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
                {/* <CSVUploader /> */}
                 {/* <div>
    <label for="file" className="block text-sm text-gray-500 dark:text-gray-300">File</label>

    <label for="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Payment File</h2>

        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> */}
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
