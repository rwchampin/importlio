"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Tooltip from "@/app/components/Tooltip";
export default function SidebarLink({ link }: any) {
  const pathname = usePathname();
  let isActive = pathname === link.href;
  if(link.href === '') {
    isActive = pathname === '/dashboard'
  }
  return (
    <Tooltip content={link.name}>
    <Link
      href={`/dashboard${link.href}`}
      key={link.name}
      title={'dffdf'}
      className={`flex items-center text-xs justify-center gap-2  hover:cursor-pointer duration-200 ease-in-out hover:scale-110 overflow-visible`}
    >
      
        <link.icon className={`${isActive ? "text-gray-300": "text-gray-500"} hover:text-white h-6 w-6`}   size={24} />
    </Link>
    </Tooltip>
  );
}
