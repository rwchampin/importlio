"use client";

import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { NavLink, Logo } from "@/components/common";

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const isSelected = (path: string) => (pathname === path ? true : false);

  const links = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog', children: [
      { href: '/post-1', label: 'Blog 1' },
      { href: '/post-2', label: 'Blog 2' },
      { href: '/post-3', label: 'Blog 3' },
      { href: '/post-4', label: 'Blog 4' },

    ] },
    { href: '/about', label: 'About' },

  ];

  const authLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected("/dashboard")}
        isMobile={isMobile}
        href="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );

  const guestLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected("/auth/login")}
        isMobile={isMobile}
        href="/auth/login"
      >
        Login
      </NavLink>
      <NavLink
        isSelected={isSelected("/auth/register")}
        isMobile={isMobile}
        href="/auth/register"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <nav className="relative bg-white shadow">
      	<div className="container px-6 py-4 mx-auto">
        	<div className="lg:flex lg:items-center lg:justify-between">
          		<div className="flex items-center justify-between">
					<a href="#">
						<Logo />
					</a>
			
					{links.map((link) => {
						return (
						<NavLink
							key={link.href}
							href={link.href}
							isSelected={isSelected(link.href)}
							isMobile={false}
							>{link.label}</NavLink>
					)
					})}

					<div className="flex lg:hidden">
					<button
						type="button"
						className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="toggle menu"
					>
						<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 8h16M4 16h16"
						/>
						</svg>

						<svg
						x-show="isOpen"
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
						</svg>
					</button>
					</div>
          		</div>
			</div>
 

            {/* <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div> */}
          </div>
        </div>

    </nav>
  );
  // return (
  // 	<Disclosure as='nav' classNameName='bg-gray-800'>
  // 		{({ open }) => (
  // 			<>
  // 				<div classNameName='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
  // 					<div classNameName='relative flex h-16 items-center justify-between'>
  // 						<div classNameName='absolute inset-y-0 left-0 flex items-center sm:hidden'>
  // 							<Disclosure.Button classNameName='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
  // 								<span classNameName='sr-only'>
  // 									Open main menu
  // 								</span>
  // 								{open ? (
  // 									<XMarkIcon
  // 										classNameName='block h-6 w-6'
  // 										aria-hidden='true'
  // 									/>
  // 								) : (
  // 									<Bars3Icon
  // 										classNameName='block h-6 w-6'
  // 										aria-hidden='true'
  // 									/>
  // 								)}
  // 							</Disclosure.Button>
  // 						</div>
  // 						<div classNameName='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
  // 							<div classNameName='flex flex-shrink-0 items-center'>
  // 								<NavLink href='/' isBanner>
  // 									<Logo />
  // 								</NavLink>
  // 							</div>
  // 							<div classNameName='hidden sm:ml-6 sm:block'>
  // 								<div classNameName='flex space-x-4'>
  // 									{isAuthenticated
  // 										? authLinks(false)
  // 										: guestLinks(false)}
  // 								</div>
  // 							</div>
  // 						</div>
  // 					</div>
  // 				</div>

  // 				<Disclosure.Panel classNameName='sm:hidden'>
  // 					<div classNameName='space-y-1 px-2 pb-3 pt-2'>
  // 						{isAuthenticated
  // 							? authLinks(true)
  // 							: guestLinks(true)}
  // 					</div>
  // 				</Disclosure.Panel>
  // 			</>
  // 		)}
  // 	</Disclosure>
  // );
}
