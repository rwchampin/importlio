"use client";
import { RiMenu5Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import {CustomSuspense} from "@/components/common";
import  NavLink  from "./NavLink";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Avatar:any = dynamic(() => import("@/components/common/Avatar"));
const DynamicSocialIcons:any = dynamic(() => import("@/components/common/SocialIcons"));

export default function Navbar() {
  // const navRef = useRef(null);
  const [hoveredLink, setHoveredLink] = useState<string | undefined>("");
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

  const handleHover = (path: string | undefined) => {
    setHoveredLink(path);
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
    isHovered?: boolean;
    handleHover?: (path: string | undefined) => void;
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

  const subMenu:LinkProps = [
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
    {
      name: "Shopify",
      href: "",
    },
  ];

  useEffect(() => {

    gsap.to("nav a:not(.logo)",{
      opacity: 1,
      stagger: 0.05,
      duration: 0.15,
      ease: 'power3.inOut',
    })

  }, [])


  const DynamicLogo:any = dynamic(() => import("@/components/common/logo/LogoBlack"));
  return (
    <CustomSuspense>
      <Disclosure as="nav" className="fixed top-0 w-full z-50">
        {({ open }) => (
          <>
            <div className="ccc mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between w-full">
                <div className="w-full flex flex-1 items-center justify-center md:justify-center sm:items-center sm:justify-center gap-5">
                  <div className="flex gap-5 justify-between items-center w-full">
                    {/* <div className="flex flex-shrink-0 items-center"> */}

                    <DynamicLogo />
                    <menu className="hidden md:flex relative gap-5 mr-auto">
                      {links.map((link: LinkProps) => {
                        return (
                          <li>
                            <NavLink
                              key={link.name}
                              isSelected={isSelected(link.href)}
                              onMouseEnter={() => handleHover(link.href)}
                              onMouseLeave={() => handleHover("")}
                              href={link.href}
                              className="not-logo flex items-center justify-center font-apercu"
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </menu>
                    {/* </div> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex h-full items-center justify-center space-x-4">
                      {isAuthenticated
                        ? authLinks.map((link) => {
                            return (
                              <NavLink
                                key={link.name}
                                isSelected={isSelected(link.href)}
                                href={link.href}
                                // onClick={link.onClick}
                                isMobile={false}
                                className={`${
                                  link.name === "Login"
                                    ? "bg-black text-white rounded-lg"
                                    : "text-blue-500"
                                } hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                              >
                                {link.name}
                              </NavLink>
                            );
                          })
                        : guestLinks.map((link) => {
                            return (
                              <NavLink
                                className={"btn"}
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
                  </div>

                  {/* <NavAvatar /> */}
                  <div className="hidden lg:block">
                    <DynamicSocialIcons />
                  </div>
                  {/* <Avatar
                    // user={user}
                    handleLogout={handleLogout}
                  /> */}
                  <div className="inset-y-0 right-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex aspect-square items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <RxCross2
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiMenu5Fill
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              {/* <SubNav
              subMenu={subMenu}
              hoveredLink={hoveredLink}
              handleHover={handleHover}
            /> */}
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 fixed h-full w-full bg-offwhite flex flex-col items-center justify-center text-center">
                {isAuthenticated
                  ? authLinks.map((link) => {
                      return (
                        <NavLink
                          key={link.name}
                          isSelected={isSelected(link.href)}
                          href={link.href}
                          // onClick={link.onClick}
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
                          // onClick={link.onClick}
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
    </CustomSuspense>
  );
}
