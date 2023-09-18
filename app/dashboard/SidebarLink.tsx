"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "@/app/components/Icon";

import { matchURL } from "@/lib/functions";
import Tooltip from "@/app/components/Tooltip";
export default function SidebarLink({ link }: any) {
  const pathname = usePathname();

  return (
    <Tooltip content={link.name}>
    <Link
      href={link.href}
      key={link.name}
      title={'dffdf'}
      className={`flex items-center text-xs justify-center gap-2 ${
        matchURL(link.href, pathname) === true
          ? "text-gray-7"
          : "text-gray-dark-8"
      } hover:text-gray-9 hover:cursor-pointer duration-200 ease-in-out hover:scale-110 overflow-visible`}
    >
      
        <Icon className="stroke-white" type={link.icon} size={24} />
    </Link>
    </Tooltip>
  );
}
