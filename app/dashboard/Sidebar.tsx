"use client";

import { useAppSelector } from "@/redux/hooks";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const { user } = useAppSelector((state) => state.auth);
  const size = 25;
  const sidebarLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: 'dashboard',
    },
    {
      name: "AI",
      href: "/dashboard/ai",
      icon: 'openai',
      protected: true,
    },
    {
      name: "Posts List",
      href: "/dashboard/posts",
      icon: 'book',
      protected: true,
    },
    {
      name: "Create Posts",
      href: "/dashboard/posts/create",
      icon: 'pencil',
      protected: true,
    },
    {
      name: "Import Products",
      href: "/dashboard/import",
      icon: 'package'
    },
     

    {
      name: "Products",
      href: "/dashboard/products",
      icon: 'cart'
    } ,
    {
      name: "Lists",
      href: "/dashboard/lists",
      icon: 'file'
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: 'cog'
    },
  ];


  return (
    <div className="p-5 rounded-xl bg-gray-dark-3 h-auto flex items-center justify-between md:justify-start gap-5 md:flex-col">
      {sidebarLinks.map((link) => {

        if(link.protected && (!user || !user.is_staff)) return null;

        return (
         <SidebarLink
            key={link.name}
            link={link}
          />
        );
      })}
    </div>
  );
}
