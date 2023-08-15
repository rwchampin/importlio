
"use client"
import { signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";

import { Popover, Transition } from '@headlessui/react';

const AvatarDropdown = ({ user }) => {
  const size = 55
  const listStyle = 'px-4 py-2 hover:bg-gray-100 flex gap-1 items-center justify-start border-1 border-gray-8'
  const iconStyle = 'text-2xl text-gray-500'
  return (
    <Popover className="relative group">
      {({ open }) => (
        <>
          <Popover.Button className="group-hover:scale-110 transition transform outline-none border-none">
            <Image
              width={size}
              height={size}
              src={user.image}
              alt={`Avatar of ${user.name}`}
              className=" rounded-full cursor-pointer shadow-xl border-2 border-black p-1"
            />
          </Popover.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="absolute right-0 mt-2 bg-white border rounded-lg shadow-xl"
            >
              {/* Dropdown content */}
              <ul className="py-2">
                <li>
                  <Link
                    className={listStyle}
                    href={`/profile/${user.name}`}
                  >
                    <CgProfile className={iconStyle} />
                    <button>Profile</button>
                  </Link>
                </li>
                <li>
                  <Link
                    className={listStyle}
                    href={`/dashboard/`}
                  >
                    <AiOutlineDashboard className={iconStyle} />
                    <button>Profile</button>
                  </Link>
                </li>
                <li>
                  <Link href={`/settings`} className={listStyle}>
                    <LuSettings className={iconStyle} />
                    <button>Settings</button>
                  </Link>
                </li>
                <li>
                  <Link href={`/api/auth/signout`} className={listStyle}>
                    <RiLogoutCircleRLine className={iconStyle} />
                    <button onClick={() => signOut()}>Logout</button>
                  </Link>
                </li>
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default AvatarDropdown;
