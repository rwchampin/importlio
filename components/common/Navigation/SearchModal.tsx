"use client";

import { useRouter } from "next/navigation";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import Link from "next/link";


export default function SearchModal() {
    const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
 

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setOpen(false);
        router.push(`/search/${query}`);
    }


  return (
    <>
      <FaMagnifyingGlass
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <Transition.Root
          show={open}
          as={Fragment}
          afterLeave={() => setQuery("")}
          appear
        >
          <Dialog
            as="div"
            className="relative z-100 h-screen w-screen"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed h-screen w-screen inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20 w-screen h-screen flex items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all mx-5">
                  <Combobox>
                    <form 
                    onSubmit={handleSubmit}
                    className="relative"
                    >
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Combobox.Input
                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <Link
                        className="bg-button text-white rounded-lg flex items-center justify-center h-4/5 absolute right-2 top-1/2 -translate-y-1/2 py-2 min-w-[150px]"
                        href={`/search/${query}`}
>
    Submit
</Link>
                    </form>

                   
                  </Combobox>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
