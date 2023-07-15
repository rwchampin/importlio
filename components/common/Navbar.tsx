"use client";
import { RiMenu5Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { NavLink, Logo, SocialIcons } from "@/components/common";
import { NavAvatar } from "@/components/auth";
import dynamic from "next/dynamic";

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  debugger;
  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const isSelected = (path: string | undefined) =>
    pathname === path ? true : false;

  const authLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Logout",
      onClick: handleLogout,
    },
  ];

  const guestLinks = [
    {
      name: "Login",
      href: "/auth/login",
    },
    {
      name: "Register",
      href: "/auth/register",
    },
  ];
  interface LinkProps {
    className?: string;
    href?: string;

    onClick?: () => void;
    [rest: string]: any;
  }
  const links: LinkProps = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "E-commerce Tutorials",
      href: "/ecommerce-tutorials",
    },
  ];

  return (
    <Disclosure as="nav" className="shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenu5Fill className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="w-full flex flex-1 items-center justify-center md:justify-center sm:items-center sm:justify-center gap-5">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-shrink-0 items-center">
                    <NavLink href="/" isBanner>
                      <Logo size="40" />
                    </NavLink>

                    <div className="hidden md:flex">
                      {links.map((link: LinkProps) => {
                        return (
                          <NavLink
                            key={link.name}
                            isSelected={isSelected(link.href)}
                            href={link.href}
                            className="flex items-center justify-center"
                          >
                            {link.name}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <div className="flex h-full items-center justify-center space-x-4">
                    {isAuthenticated
                      ? authLinks.map((link) => {
                          return (
                            <NavLink
                              key={link.name}
                              isSelected={isSelected(link.href)}
                              href={link.href}
                              onClick={link.onClick}
                              isMobile={false}
                              className={`${link.name === 'ogin' ? 'bg-black text-white rounded-lg' : 'bg-white text-blue-500'} hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                            >
                              {link.name}
                            </NavLink>
                          );
                        })
                      : guestLinks.map((link) => {
                          return (
                            <NavLink
                              key={link.name}
                              isSelected={isSelected(link.href)}
                              href={link.href}
                              onClick={link.onClick}
                              isMobile={false}
                              solid={link.name === "Login"}
                              border={link.name === "Register"}
                            >
                              {link.name}
                            </NavLink>
                          );
                        })}
                  </div>
                </div> */}
                <SocialIcons />
                <NavAvatar />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {isAuthenticated
                ? authLinks.map((link) => {
                    return (
                      <NavLink
                        key={link.name}
                        isSelected={isSelected(link.href)}
                        href={link.href}
                        onClick={link.onClick}
                        isMobile={true}
                      >
                        {link.name}
                      </NavLink>
                    );
                  })
                : links.map((link: LinkProps) => {
                    return (
                      <NavLink
                        key={link.name}
                        isSelected={isSelected(link.href)}
                        href={link.href}
                        onClick={link.onClick}
                        isMobile={true}
                      >
                        {link.name}
                      </NavLink>
                    );
                  })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
