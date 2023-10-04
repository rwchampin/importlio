"use client";
import { Fragment, Suspense, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { classNames } from "@/lib/functions";
import DropdownItem from "./DropdownItem";

import DropDownRecentPosts from "./DropDownRecentPosts";
import Spinner from "@/app/components/Spinner";

export default function Dropdown({ children, menuItems }: any) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "group flex hover:cursor-pointer items-center justify-center focus:outline-none focus:border-0"
            )}
          >
            {children}
            <ChevronDownIcon
              className="text-black h-4 w-4"
              // className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform rounded-xl">
              <div className="bg-white p-3">
                <div className="relative">
                  {menuItems &&
                    menuItems.map((item: any, i: any) => (
                      <DropdownItem key={i} item={item} />
                    ))}
                </div>
                <Suspense fallback={<Spinner lg />}>
                  <DropDownRecentPosts />
                </Suspense>
                <div className="mt-5 text-sm">
                  <a
                    href="/ecommerce-tutorials"
                    className="font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-500"
                  >
                    View all posts
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
