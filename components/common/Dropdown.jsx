"use client";
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidChevronDown } from 'react-icons/bi';
import { useBlog } from '@/store';
import Badge from '@/components/common/Badge';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({
  children,
  link,
   
  label,
  labelId,
  type,
  onChange,
  value,
  name,
  required,
  placeholder,
  ...props
}) {
  const { posts } = useBlog();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 

  return (
    <Menu 
    as="div"
     className="relative inline-block text-left" 
      onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >

        <Menu.Button className="flex items-center justify-center bg-transparent hover:ring-transparent outline-none">
          <Link
            href={link.href}
            >
              {link.pretty}
            </Link>
          <BiSolidChevronDown className="-mr-1 h-3 w-3 text-black" aria-hidden="true" />
        </Menu.Button>


      <Transition
        as={Fragment}
        show={isHovered}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  left-0 z-10 top-[2rem] w-full min-w-[400px] max-h-[400px] overflow-y-auto divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {posts.map((item, idx) => (
               <div 
                key={idx}
               className="w-auto" 
               >
               <Menu.Item>
                 {({ active }) => (
                   <Link
                    href={`/ecommerce-tutorials/${item.slug}`}
                    >
                  <span
                      key={idx}
                      className="flex items-center gap-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  >
                    <Image
                      src={item.featured_image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md aspect-square flex-shrink-0"
                    />
                    <div className="flex flex-col">
                    {item.title}
                    <Badge size='xxs'>
                      {item.published}
                      </Badge>
                    </div>
                    </span>
                    </Link>
                  )}

                 
               </Menu.Item>
               </div>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
