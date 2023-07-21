"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TbPackageImport } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiFileList2Line } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { Popover } from "@/components/common";
import { BiSolidCog } from "react-icons/bi";
export default function Sidebar() {
  const size = 25;
  const sidebarLinks = [
    {
      name: "Dashboard",
      href: "/dash",
      icon: <AiOutlineDashboard size={size} />,
    },
    {
      name: "Posts",
      href: "/dash/posts",
      icon: <FaBook size={size} />,
      protected: true,
    },
    {
      name: "Import",
      href: "/dash/import",
      icon: <TbPackageImport size={size} />,
    },
    {
      name: "Import",
      href: "/dash/import",
      icon: <TbPackageImport size={size} />,
    },

    {
      name: "Products",
      href: "/dash/products",
      icon: <BsCart4 size={size} />,
    },
    {
      name: "Profile",
      href: "/dash/profile",
      icon: <CgProfile size={size} />,
    },
    {
      name: "Lists",
      href: "/dash/lists",
      icon: <RiFileList2Line size={size} />,
    },
    {
      name: "Settings",
      href: "/dash/settings",
      icon: <BiSolidCog size={size} />,
    },
  ];
  return (
    <div className="p-5 rounded-lg bg-black h-full flex items-center justify-center md:justify-start gap-5 md:flex-col">
      {sidebarLinks.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className="flex items-center justify-center gap-2 text-white hover:text-gray-500"
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
}
