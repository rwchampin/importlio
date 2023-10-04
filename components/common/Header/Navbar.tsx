"use client";

import dynamic from "next/dynamic";
import { Disclosure } from "@headlessui/react";
import SocialIcons from "@/app/components/SocialIcons";
// import { motion } from "framer-motion";
import LoginOrAvatar from "@/components/common/LoginOrAvatar";
import LogoBlack from "@/components/common/LogoBlack";
import NavLink from "./NavLink";
import { LinkProps } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { BiDollarCircle } from 'react-icons/bi'
import { AiOutlineLineChart, AiOutlineStar } from 'react-icons/ai'

import useResponsive from "@/hooks/useResponsive";
// import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
// import MegaMenu from "./MegaMenu";

const DesktopNavigation: any = dynamic(() => import("./DesktopNavigation"));

const MobileToggle: any = dynamic(() => import("./MobileToggle"));

export default function Navbar() {
  // const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const responsive: any = useResponsive();

  const links: any = [
    {
      pretty: "About",
      href: "/about",
      dropdownData: [],
    },
    {
      pretty: "Features",
      href: "/features",
      dropdownData: [],
    },
  
    {
      pretty: "Email Lists",
      href: "/email-lists",
      dropdownData: [{
        pretty: "Free Trial",
        href: "/email-lists/free-trial",
        description: "Get a free trial of our email lists. No credit card required.",
        icon: BiDollarCircle,
        cta: () => <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">Start Free Trial</Button>
      },
      {
        pretty: "Niche Email Marketing",
        href: "/email-lists/niche-email-marketing",
        description: "Choose from our 100+ niche email lists.",
        icon: AiOutlineLineChart,
        cta: () => <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">Choose a list</Button>
      },{
        pretty: "Custom Email Lists",
        href: "/email-lists/custom-email-lists",
        description: "Use our custom email list builder to create your own email list.",
        icon: AiOutlineStar,
        cta: () => <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">Join Today!</Button>
      }],
    },
    {
      pretty: "FAQ",
      href: "/faq",
      dropdownData: [],
    },
    {
      pretty: "Pricing",
      href: "/pricing",
      dropdownData: [],
    },
    {
      pretty: "Ecommerce Tutorials",
      href: "/ecommerce-tutorials",
      dropdownData: [],
    },
    {
      pretty: "Contact",
      href: "/contact",
      dropdownData: [],
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
                  {/* <div className="flex h-full items-center justify-center space-x-4"> */}
                  <LoginOrAvatar />
                  {/* </div> */}
                </div>

                {responsive.lg === true && <SocialIcons />}

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
