"use client";
import { HomeIcon } from '@heroicons/react/20/solid'
import { get } from 'http';

import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function BreadCrumbs() {
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter((path:string) => {
      return path !== ''  
    })

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex space-x-4 rounded-md">
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pathArray.map((path,i) => (
          <li key={path} className="flex">
            <div className="flex items-center">
             /
              <Link
                href={i === 0 ? `/${path}` : `/${pathArray.slice(0,i+1).join('/')}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                // aria-current={page.current ? 'page' : undefined}
              >
                {path}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
