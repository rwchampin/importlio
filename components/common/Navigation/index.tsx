"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";

import LogoBlack from "@/components/common/LogoBlack";

import { RxHamburgerMenu } from "react-icons/rx";
import SocialIcons from "@/app/components/SocialIcons";

import { useEffect, useState } from "react";
import LoginOrAvatar from "@/components/common/LoginOrAvatar";

import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import Banner from "@/app/components/Banner";


import { useAppSelector } from "@/redux/hooks";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import "@/assets/styles/nav.css";
import useAuth from "@/hooks/use-auth";
export default function Navigation() {
  const { data: user, isLoading } = useRetrieveUserQuery();

  const { banner } = useAppSelector((state:any) => state.core);
  const showBanner = banner && banner.length ? true : false;
  // const [userInfo, setUserInfo] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);

 

  // useEffect(() => { 
  //   if(!userInfo && user) {
  //     setUserInfo(user)
  //   }
  // }, [user])

  const links: any = [
    {
      pretty: "About",
      href: "/about",
      dropdown: null,
      protected: false,
    },
    {
      pretty: "Features",
      href: "/features",
      dropdown: null,
      protected: false,

    },

    {
      pretty: "Email Lists",
      href: "/email-lists",
      dropdown: null,
      protected: false,

    },
    {
      pretty: "FAQ",
      href: "/faq",
      dropdown: null,
      protected: false,

    },
    {
      pretty: "Pricing",
      href: "/pricing",
      dropdown: null,
      protected: false,

    },
    {
      pretty: "Ecommerce Tutorials",
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
      pretty: 'Dashboard',
      href: '/dashboard',
      dropdown: null,
      protected: true
    }
  ];

  return (
    <header className="fixed top-0 w-screen left-0">
    {showBanner && <Banner />}
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      // shouldHideOnScroll={true}
      maxWidth="full"
      isBlurred={true}
      //  isBordered={true}
      className={`backdrop-blur-sm bg-transparent z-50`}
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
        <DesktopNavigation links={links} user={user} isLoading={isLoading} />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-5">
        <LoginOrAvatar 
        />
        <div className="hidden xl:flex">
          <SocialIcons />
        </div>
      </NavbarContent>
      <MobileMenu links={links} />
    </Navbar>
    </header>
  );
}
