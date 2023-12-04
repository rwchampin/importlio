"use client";
import React, { forwardRef } from "react";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavigationItem = forwardRef((props: any, ref: any) => {
  const { link } = props;

  const pathname = usePathname();

  const isActive = pathname === link.href;

 
 

  if(!isActive) {
    return (
      <NavbarItem isActive={pathname === link.href} className="relative">
        <Link
          href={link.href}
          className={`${isActive ? "text-black" : "text-gray-500"}`}
        >
          {link.pretty}
        </Link>
      </NavbarItem>
    )
  }
  return (
    <div ref={ref}>
      <NavbarItem isActive={pathname === link.href} className="relative">
        <Link
          href={link.href}
          className={`${isActive ? "text-black" : "text-gray-500"}`}
        >
          {link.pretty}
        </Link>
      </NavbarItem>
    </div>
  );
});

export default DesktopNavigationItem;