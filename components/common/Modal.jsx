"use client";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import { Close, LogoBlack, EmailForm } from '@/components/common';
import { Primary } from '@/app/_components/buttons';
import { useModal } from '@/store';


export default function Modal() {
  const { toggleModal,isOpen  } = useModal();

  return (
    <div className='main-modal'>


     
      <Primary variant="solid" className='max-w-[500px]' onClick={toggleModal}>Preregister</Primary>

      <Transition appear show={isOpen} as={Fragment} className="outer-modal z-[999999]">
        <Dialog as="div" className="modal relative z-[999999]" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-45" />
          </Transition.Child>

          <div style={{ zIndex: '999999999px !important'}} className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal">
                  <Close closeFN={toggleModal} />
                  <div className="flex items-center justify-center">
                    <LogoBlack />
                  </div>
                  <EmailForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </div>
  )
}
