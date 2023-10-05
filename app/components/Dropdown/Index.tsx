"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {BiSolidChevronDown} from 'react-icons/bi'

 
 
export default function Dropdown({ children, menu }: any) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="group flex hover:cursor-pointer items-center justify-center focus:outline-none focus:border-0"
          >
            {children}
            <BiSolidChevronDown
              className="text-black h-4 w-4"
              aria-hidden={open ? "true" : "false"}
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
            <Popover.Panel className="absolute flex flex-col gap-2 left-0 z-10 mt-3 w-auto max-w-[320px] bg-white p-3 transform rounded-md overflow-scroll h-auto max-h-[75vh]">
              {menu}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}


