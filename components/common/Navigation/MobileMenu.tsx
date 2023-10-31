"use client";
import { usePathname } from "next/navigation";
import {
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

import {
  FaUserGraduate
} from 'react-icons/fa'
import {
  BsFillPeopleFill,
  BsStars,
  BsPatchQuestionFill
} from 'react-icons/bs'
import {
  PiUserListBold
} from 'react-icons/pi'
import {
  IoMdPricetags
} from 'react-icons/io'
import {
  BiLogOutCircle
} from 'react-icons/bi'
import {
  FiPhoneCall
} from 'react-icons/fi'

// import ShadowText from "@/app/components/typography/ShadowText";
export default function MobileMenu({
  links,
}: any) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href;
  }

  const getIcon = (href: string) => {
    const iconStyle = `text-xl ${isActive(href) ? 'text-white' : 'text-black/50'}`
    switch(href) {
      case "/about":
        return <BsFillPeopleFill className={iconStyle} />

      case "/features":
        return <BsStars className={iconStyle} />
      
      case "/email-lists":
        return <PiUserListBold className={iconStyle} />

      case "/faq":
        return <BsPatchQuestionFill className={iconStyle} />

      case "/pricing":
        return <IoMdPricetags className={iconStyle} />

      case "/contact":
        return <FiPhoneCall className={iconStyle} />

      case "/auth/logout":
        return <BiLogOutCircle className={iconStyle} />

      case '/ecommerce-tutorials':
        return <FaUserGraduate className={iconStyle} />

      default:
        return null
    }
  }
  return (
    <NavbarMenu
      className="top-0 bottom-0 bg-gray-300 h-full min-h-screen flex flex-col justify-center px-3"
    >
    {links.map((link: any, index: any) => {

      const active = isActive(link.href)

      return (
      <NavbarMenuItem key={`${link.name}-${index}`}>
        <Link
          className={`w-full text-xl ${active ? 'bg-black' : 'bg-gray-400/20'} px-3 py-5 rounded-xl hover:bg-gray-400/50 overflow-hidden relative group flex gap-2`}
          href={link.href}
        >

          <div>{getIcon(link.href)}</div>
          <span className={`${active ? 'text-white':'text-black/50'}`}>{link.pretty}</span>
        </Link>
      </NavbarMenuItem>
    )})}

    
  </NavbarMenu>
  )
}
