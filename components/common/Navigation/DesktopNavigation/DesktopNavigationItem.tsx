"use client";
import React from "react";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function DesktopNavigationItem({ link }: any) {
  const pathname = usePathname();

  const isActive = pathname === link.href;
  return (
    <NavbarItem isActive={pathname === link.href}>
      <Link href={link.href} className={`${isActive ? 'text-black' : 'text-gray-500'}`}>
        {link.pretty}
      </Link>
    </NavbarItem>
  );
}
