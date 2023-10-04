"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { classNames } from "@/lib/functions";
import Dropdown from "@/app/components/Dropdown/Index";

interface Props {
  href?: string;
  dropdownData?: any;
  setOpenMegaMenu?: any;
  solid?: boolean;
  type?: string | boolean;
  border?: boolean;
  className?: string;
  name?: string;
  ariaLabel?: string;
  role?: string;
  ariaCurrent?: string;
  link: any;
  openMegaMenu?: boolean;
  children?: any;
}

export default function NavLink({
  link,
  // setOpenMegaMenu,
  // openMegaMenu,
}: Props) {
  const segment = useSelectedLayoutSegment();
  const isActive = link.href.replace("/", "") === segment;

  const className = classNames(
    "font-apercu font-bold text-sm hover:pointer-cursor flex items-center justify-center whitespace-nowrap",
    {
      "gap-3 text-black font-apercu font-bold underline": isActive,
      // 'bg-black text-white text-xs rounded-md px-4 py-2 outline-2 outline-black no-underline focus:text-white focus:bg-black active:bg-black active:text-white active:no-underline': link.solid,
      // 'bg-transparent text-black text-xs outline-2 outline-black rounded-md  px-4 py-2 no-underline': link.border,
    }
  );

  if (!link) {
    return <div>ERROR: Issue with link</div>;
  }

  const curentLinkProps: any = {
    "aria-label": link.pretty,
    href: link.href,
    role: "menuitem",
    className: className,
  };
  if (isActive) {
    curentLinkProps["aria-current"] = "page";
  }

  if (link.dropdownData.length > 0) {
    curentLinkProps["aria-haspopup"] = "true";
    curentLinkProps["aria-expanded"] = "false";

    curentLinkProps["role"] = "menuitem";
    // curentLinkProps["onMouseEnter"] = () => setOpenMegaMenu(true);
    // curentLinkProps["onMouseLeave"] = () => setOpenMegaMenu(false);
  }

  if(link.dropdownData.length > 0) {

    return (
      <Dropdown
        menuItems={link.dropdownData}
        // setOpenMegaMenu={setOpenMegaMenu}
        // open={openMegaMenu}
      >
      <Link 
        href={link.href}
      {...curentLinkProps}
      >
        {link && link.pretty}
      </Link>
      </Dropdown>
    )
  }

  return (
    <Link {...curentLinkProps}
    >
      {link && link.pretty}
    </Link>
  );
}
