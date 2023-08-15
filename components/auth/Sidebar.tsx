"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TbPackageImport } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiFileList2Line } from "react-icons/ri";
import { BsCart4, BsPencil } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import {BiSolidCog} from "react-icons/bi";
import { usePathname } from "next/navigation";
import { SiOpenai } from "react-icons/si";

export default function Sidebar() {
  const pathname = usePathname();
  
  const size = 25;
  const sidebarLinks = [
    {
      name: "Dashboard",
      href: "/dashboard/",
      icon: <AiOutlineDashboard size={size} />,
    },
    {
      name: "AI",
      href: "/dashboard/ai/",
      icon: <SiOpenai size={size} />,
      protected: true,
    },
    {
      name: "Posts List",
      href: "/dashboard/posts/",
      icon: <FaBook size={size} />,
      protected: true,
    },
    {
      name: "Create Posts",
      href: "/dashboard/posts/create/",
      icon: <BsPencil size={size} />,
      protected: true,
    },
    {
      name: "Import Products",
      href: "/dashboard/import/",
      icon: <TbPackageImport size={size} />,
    },
     

    {
      name: "Products",
      href: "/dashboard/products/",
      icon: <BsCart4 size={size} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile/",
      icon: <CgProfile size={size} />,
    },
    {
      name: "Lists",
      href: "/dashboard/lists/",
      icon: <RiFileList2Line size={size} />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings/",
      icon: <BiSolidCog size={size} />,
    },
  ];

  const matchURL = (url:string) => {
    // check if url contains the pathname
    return url.includes(pathname);
  };

  return (
    <div className="p-5 rounded-lg bg-gray-dark-3 h-auto flex items-center justify-center md:justify-start gap-5 md:flex-col">
      {sidebarLinks.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`flex items-center text-xs justify-center gap-2 ${matchURL(link.href) === true ? 'text-gray-7' : 'text-gray-dark-8'} hover:text-gray-9 hover:cursor-pointer duration-200 ease-in-out hover:scale-110`}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
}
