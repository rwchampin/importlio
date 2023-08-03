"use client";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import dynamic from 'next/dynamic'
import {toggleModal} from '@/redux/slices/ui';
import {useAppSelector, useAppDispatch} from "@/redux/hooks";

const Primary=dynamic(() => import("@/app/components/buttons/Primary"));
const DynamicLogoBlack=dynamic(() => import("@/components/common/logo/LogoBlack"));
const Close=dynamic(() => import("@/components/common/Close"));

export default function Modal({ModalBody, theme}) {
  const {isModalOpen}=useAppSelector(state => state.ui);
  const dispatch=useAppDispatch();

  const toggle=() => {
    dispatch(toggleModal());
  }
  return (
    <>


      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggle}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-backdrop blur-lg bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                  <Close closeFN={toggle} />
                  <div className="flex items-center justify-center">
                    <DynamicLogoBlack />
                  </div>
                  <ModalBody />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Primary variant="solid" className='max-w-[500px]' onClick={toggle}>Preregister</Primary>


    </>
  )
}
