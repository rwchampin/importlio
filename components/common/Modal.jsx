"use client";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {Button} from "@nextui-org/react";


export default function Modal({ children, buttonText, buttonSize, isOpen, setIsOpen }) {

  const cancelButtonRef = useRef(null)

  return (
    <>
    <Button
      className='w-full max-w-md bg-button text-white text-xs'
      variant='primary'
      onClick={() => setIsOpen(true)}
      size="lg"
      radius="sm"
    >
      {buttonText}
    </Button>
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999999999]" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
