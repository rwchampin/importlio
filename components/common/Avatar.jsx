
"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {BiChevronDown} from 'react-icons/bi'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Avatar({user}) {

    return (
      <Menu as="div" className="avatar relative inline-block text-left">
       
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded text-sm font-semibold text-gray-900">
            <Image
            className="inline-block rounded overflow-hidden aspect-square  shadow-md border-5 border-gray-400 outline-2"
              src={user?.picture||"https://ui-avatars.com/api/?name=John+Doe"}
              alt="Amazon Ecommerce Dropshipping Tutorials"
              width={80}
              height={80}
            />
          </Menu.Button>
           

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

              <Menu.Item>
                {({active}) => (
                  <a
                    href="#"
                    className={classNames(
                      active? 'bg-gray-100 text-gray-900':'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <a
                    href="#"
                    className={classNames(
                      active? 'bg-gray-100 text-gray-900':'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <a
                    href="#"
                    className={classNames(
                      active? 'bg-gray-100 text-gray-900':'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({active}) => (
                    <button
                      type="submit"
                      className={classNames(
                        active? 'bg-gray-100 text-gray-900':'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  