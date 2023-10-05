"use client";

import dynamic from "next/dynamic";
import { Disclosure } from "@headlessui/react";

// import { motion } from "framer-motion";
import LoginOrAvatar from "@/components/common/LoginOrAvatar";
import LogoBlack from "@/components/common/LogoBlack";
import NavLink from "./NavLink";
import { LinkProps } from "@/lib/constants";
import useResponsive from "@/hooks/useResponsive";


const SocialIcons: any = dynamic(() => import("@/app/components/SocialIcons"));
const EmailListsDropdown: any = dynamic(() => import("./EmailListsDropdown"));
const BlogDropdown: any = dynamic(() => import("./BlogDropdown"));
const DesktopNavigation: any = dynamic(() => import("./DesktopNavigation"));

const MobileToggle: any = dynamic(() => import("./MobileToggle"));

export default function Navbar() {


  const responsive: any = useResponsive();

  const links: any = [
    {
      pretty: "About",
      href: "/about",
      dropdown: null
    },
    {
      pretty: "Features",
      href: "/features",
      dropdown: null
    },
  
    {
      pretty: "Email Lists",
      href: "/email-lists",
      dropdown: <EmailListsDropdown />,
    },
    {
      pretty: "FAQ",
      href: "/faq",
     dropdown: null
    },
    {
      pretty: "Pricing",
      href: "/pricing",
     dropdown: null
    },
    {
      pretty: "Ecommerce Tutorials",
      href: "/ecommerce-tutorials",
      dropdown: <BlogDropdown />,
    },
    {
      pretty: "Contact",
      href: "/contact",
     dropdown: null
    }
  ];

  return (
    <Disclosure as="nav" className="w-full absolute" aria-label="Main menu">
      {({ open }) => (
        <div>
          <Disclosure.Panel className="sm:hidden">
            <ul
              role="menu"
              className="mobile-text space-y-1 px-2 pb-3 pt-2 top-0 fixed h-screen w-screen bg-offwhite text-xxl flex flex-col items-center justify-center text-center"
            >
              {links.map((link: LinkProps, i:any) => {
                return (
                  <li role="menuitem" key={i}>
                    <NavLink key={link.name} link={link}>
                      {link.pretty}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
          <div className="ccc mx-auto max-w-[90vw]">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="w-full flex flex-1 items-center justify-center md:justify-center sm:items-center sm:justify-center gap-5">
                <div className="flex gap-5 justify-between items-center w-full">
                  <LogoBlack />

                  <DesktopNavigation
                    links={links}
                    // openMegaMenu={openMegaMenu}
                    // setOpenMegaMenu={setOpenMegaMenu}
                  />
                </div>
                <div className="hidden sm:ml-6 md:flex   gap-3">
                  <LoginOrAvatar />
                </div>

                <SocialIcons />

                {responsive.lg === false && <MobileToggle open={open} />}
              </div>
            </div>
            {/* <MegaMenu setOpenMegaMenu={setOpenMegaMenu} open={openMegaMenu} /> */}
          </div>
        </div>
      )}
    </Disclosure>
  );
}
