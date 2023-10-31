"use client";
import {
  NavbarMenu,
  NavbarMenuItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";

import LogoBlack from "@/components/common/LogoBlack";

import { RxHamburgerMenu } from "react-icons/rx";
import SocialIcons from "@/app/components/SocialIcons";

import React from "react";
import LoginOrAvatar from "@/components/common/LoginOrAvatar";
import "@/assets/styles/nav.css";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Navigation() {
  // const { data: user } = useRetrieveUserQuery();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links: any = [
    {
      pretty: "About",
      href: "/about",
      dropdown: null,
    },
    {
      pretty: "Features",
      href: "/features",
      dropdown: null,
    },

    {
      pretty: "Email Lists",
      href: "/email-lists",
      dropdown: null,
    },
    {
      pretty: "FAQ",
      href: "/faq",
      dropdown: null,
    },
    {
      pretty: "Pricing",
      href: "/pricing",
      dropdown: null,
    },
    {
      pretty: "Ecommerce Tutorials",
      href: "/ecommerce-tutorials",
      dropdown: null,
    },
    {
      pretty: "Contact",
      href: "/contact",
      dropdown: null,
    } 
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      // shouldHideOnScroll={true}
      position="sticky"
      maxWidth="full"
      isBlurred={true}
      //  isBordered={true}
      className="backdrop-blur-sm bg-transparent z-50"
    >
      {/* <NavbarContent justify="start" className="flex-none grow-0"> */}
      <NavbarMenuToggle
        className="flex-1 justify-start lg:hidden"
        icon={<RxHamburgerMenu className="text-black h-10 w-10" />}
      />
      <NavbarBrand className="grow-0 justify-start items-center">
        <LogoBlack />
      </NavbarBrand>
      {/* </NavbarContent> */}
      <NavbarContent justify="start" className="hidden lg:flex gap-4">
        <DesktopNavigation links={links} />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <LoginOrAvatar />
        <div className="hidden xl:flex">
          <SocialIcons />
        </div>
      </NavbarContent>
      <MobileMenu links={links} />
    </Navbar>
  );
}
