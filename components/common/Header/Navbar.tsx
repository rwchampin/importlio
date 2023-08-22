
import dynamic from "next/dynamic";
import { Disclosure } from "@headlessui/react";

import { LogoBlack, SocialIcons, LoginOrAvatar } from "@/components/common";
import NavLink from "./NavLink";

import { useResponsive } from "@/hooks";

const RiMenu5FillDynamic: any = dynamic(() =>
  import("react-icons/ri").then((mod) => mod.RiMenu5Fill)
);
const RxCross2Dynamic: any = dynamic(() =>
  import("react-icons/rx").then((mod) => mod.RxCross2)
);


 
interface LinkProps {
  href?: string;
  pretty: string;
  dropdownData: any;
  name?: string;
}

export default function Navbar({ posts }:any) {


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
      pretty: "E-commerce Tutorials",
      href: "/ecommerce-tutorials",
      dropdownData: posts,
    },
  ];
 

  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50">
      {({ open }) => (
        <div key={0}>
          <div className="ccc mx-auto max-w-[90vw]">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="w-full flex flex-1 items-center justify-center md:justify-center sm:items-center sm:justify-center gap-5">
                <div className="flex gap-5 justify-between items-center w-full">
                  <LogoBlack />

                  <menu className="hidden md:flex relative gap-5 mr-auto">
                    {links.map((link: LinkProps, idx: number) => {
                      return (
                        <li key={idx}>
                          <NavLink
                            link={link}
                            className="not-logo flex items-center justify-center font-apercu"
                          >
                            {link.pretty}
                          </NavLink>
                        </li>
                      );
                    })}
                  </menu>
                </div>
                <div className="hidden sm:ml-6 md:flex   gap-3">
                  {/* <div className="flex h-full items-center justify-center space-x-4"> */}
                  <LoginOrAvatar />
                  {/* </div> */}
                </div>

                {responsive.lg === true && <SocialIcons />}

                {responsive.lg === false && (
                  <div className="inset-y-0 right-0 flex items-center md:hidden">
                    <Disclosure.Button className="inline-flex aspect-square items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <RxCross2Dynamic
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiMenu5FillDynamic
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                )}
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
                  <NavLink key={link.name} link={link}>
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
