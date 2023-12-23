"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { MdStars } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { IoMdInformationCircleOutline } from "react-icons/io";

import SearchModal from "@/components/common/Navigation/SearchModal";
import LogoBlack from "@/components/common/LogoBlack";

import { RxHamburgerMenu } from "react-icons/rx";
import SocialIcons from "@/app/components/SocialIcons";

import { useEffect, useState } from "react";
import LoginOrAvatar from "@/components/common/LoginOrAvatar";

import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

import useAuth from "@/hooks/use-auth";

import "@/assets/styles/nav.scss";

export default function Navigation() {
  const auth = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);

  // useEffect(() => {
  //   if(user)
  // }, [isAuthenticated, user]);

  const links: any = [
    {
      pretty: "Why Importlio",
      protected: false,
      dropdown: {
        ariaLabel: "Information about Importlio",
        items: [
          {
            pretty: "About",
            description: "Learn about Importlio products, apps and services",
            href: "/about",
            icon: IoMdInformationCircleOutline,
          },
          {
            pretty: "Features",
            description: "Cheack out all the benefits of using Importlio",
            href: "/features",
            icon: MdStars,
          },
          {
            pretty: "FAQ",
            description: "Get answers to frequently asked questions",
            href: "/faq",
            icon: VscQuestion,
          },
        ],
      },
    },
    {
      pretty: "Dropshipping Resources",
      href: "/dropshipping-resources",
      protected: false,
      dropdown: {
        ariaLabel: "Dropshipping Resources",
        items: [
          {
            pretty: "Getting Started",
            description: "Learn how to get started with dropshipping",
            href: "/dropshipping-resources/getting-started",
            dropdown: null,
            protected: false,
          },
          {
            pretty: "Tools",
            description: "Tools to help your ecommerce business grow",
            href: "/dropshipping-resources/tools",
            dropdown: null,
            protected: false,
          },
          {
            pretty: "Email Lists",
            description: "Email lists to help your ecommerce business grow",
            href: "/email-lists",
            dropdown: null,
            protected: false,
          },
        ],
      },
    },
    {
      pretty: "Business Name Generator",
      description: "Generate a business name for your dropshipping store",
      href: "/dropshipping-resources/business-name-generator",
      dropdown: null,
      protected: false,
    },
    {
      pretty: "Social Media",
      description: "Social media to help your ecommerce business grow",
      href: "/social-media/post-generator",
      dropdown: null,
      protected: false,
    },
    {
      pretty: "Ecommerce Tutorials",
      description: "Ecommerce tutorials to help your business grow",
      href: "/ecommerce-tutorials",
      dropdown: null,
      protected: false,
    },
    {
      pretty: "Contact",
      href: "/contact",
      dropdown: null,
      protected: false,
    },
    {
      pretty: "Dashboard",
      href: "/dashboard",
      dropdown: null,
      protected: true,
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      // shouldHideOnScroll={true}
      maxWidth="full"
      // isBlurred={true}
      //  isBordered={true}
      className={`backdrop-blur-sm bg-transparent z-50 fixed top-0`}
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
      <NavbarContent
        justify="start"
        className="hidden lg:flex gap-4 desktop-nav"
      >
        <DesktopNavigation links={links} auth={auth} />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-5 nav-buttons nav-icons">
        <div className="hidden xl:flex">
          <SearchModal />
        </div>
        <LoginOrAvatar auth={auth} />
        <div className="hidden xl:flex">
          <SocialIcons />
        </div>
      </NavbarContent>
      <MobileMenu links={links} />
    </Navbar>
  );
}
