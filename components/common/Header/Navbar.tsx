"use client";
import { RiMenu5Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { CustomSuspense } from "@/components/common";
import NavLink from "./NavLink";
import dynamic from "next/dynamic";


import { useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { useResponsive } from "@/hooks";




const DynamicSocialIcons: any = dynamic(
  () => import("@/components/common/SocialIcons")
);

export default function Navbar() {
  const responsive:any = useResponsive();
  const [hoveredLink, setHoveredLink] = useState<string | undefined>("");
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleHover = (path: string | undefined) => {
    setHoveredLink(path);
  };

  const isSelected = (path: string | undefined) =>
    pathname === path ? true : false;

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
      name: "FAQ",
      href: "/faq",
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

  useEffect(() => {
    gsap.to("nav a:not(.logo)", {
      opacity: 1,
      stagger: 0.05,
      duration: 0.15,
      ease: "power3.inOut",
    });
  }, []);

  const DynamicLogo: any = dynamic(
    () => import("@/components/common/logo/LogoBlack")
  );

  return (
    <CustomSuspense>
      <Disclosure as="nav" className="fixed top-0 w-full z-50">
        {({ open }) => (
          <>
            <div className="ccc mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between w-full">
                <div className="w-full flex flex-1 items-center justify-center md:justify-center sm:items-center sm:justify-center gap-5">
                  <div className="flex gap-5 justify-between items-center w-full">


                    <Suspense fallback={<div>Loading...</div>}>
                      <DynamicLogo  />
                    </Suspense>
                    <menu className="hidden md:flex relative gap-5 mr-auto">
                      {links.map((link: LinkProps) => {
                        return (
                          <li key={link.name}>
                            <NavLink
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

                  </div>
                  <div className="hidden sm:ml-6 md:flex   gap-3">
                    {/* <div className="flex h-full items-center justify-center space-x-4"> */}
                      {/* <LoginOrAvatar /> */}
                    {/* </div> */}
                  </div>

                  {responsive.lg === true && <DynamicSocialIcons />}
                  <div className="inset-y-0 right-0 flex items-center md:hidden">
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
              <div className="mobile-text space-y-1 px-2 pb-3 pt-2 fixed h-full w-full bg-offwhite text-xxl flex flex-col items-center justify-center text-center">
                {links.map((link: LinkProps) => {
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
