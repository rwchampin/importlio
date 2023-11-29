"use client";
import { Skeleton } from "@nextui-org/skeleton";
import { TbPackages, TbDatabaseSearch } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { AiOutlineSetting, AiOutlineDashboard } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuNewspaper } from "react-icons/lu";

import SidebarLink from "./SidebarLink";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Sidebar() {
  const { data: user, isLoading } = useRetrieveUserQuery();
  const size = 6;
  const sidebarLinks = [
    
    {
      name: "AI",
      href: "/ai",
      icon: SiOpenai,
      protected: true,
    },
    {
      name: "Posts List",
      href: "/posts",
      icon: FaBook,
      protected: true,
    },
    {
      name: "Create Posts",
      href: "/posts/create",
      icon: GrEdit,
      protected: true,
    },
    {
      name: "Product Scraper",
      href: "/scrape-products",
      icon: TbDatabaseSearch,
    },
    {
      name: "Import Products",
      href: "/import",
      icon: TbPackages,
    },

    {
      name: "Products",
      href: "/products",
      icon: PiShoppingCartDuotone,
    },
    {
      name: "Lists",
      href: "/lists",
      icon: LuNewspaper,
    },
    {
      name: "Settings",
      href: "/settings/",
      icon: AiOutlineSetting,
    },
  ];

  if (isLoading) {
    return (
      <div className="p-5 rounded-xl bg-gray-dark-3 h-full flex items-center justify-between gap-5 md:flex-col">
        {sidebarLinks.map((link: any, index: any) => {
          return (
            
              <Skeleton className="flex rounded-full w-6 h-6" key={index} />
            
          );
        })}
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl bg-gray-dark-3 h-full flex items-center justify-between gap-5 md:flex-col">
      <SidebarLink
        link={{
          name: "Dashboard",
          href: "",
          icon: AiOutlineDashboard,
        }}
      />
      {sidebarLinks.map((link) => {
        if (link.protected && (!user || !user.is_staff)) return null;

        return <SidebarLink key={link.name} link={link} />;
      })}
    </div>
  );
}
