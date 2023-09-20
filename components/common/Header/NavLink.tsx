"use client";

import Link from "next/link";
import cn from "classnames";
import Dropdown from "@/app/components/Dropdown";
import { usePathname } from "next/navigation";
interface Props {
  href?: string;
  dropdownData?: any;
  children: React.ReactNode;
  [rest: string]: any;
  solid?: boolean;
  type?: string | boolean;
  border?: boolean;
}

export default function NavLink({ link, ...rest }: Props) {
  const { pathname }: any = usePathname();

  const isSelected = (path: string | undefined) =>
    pathname === path ? true : false;

  const className = cn(
    rest.className,
    "font-apercu font-bold text-lg hover:pointer-cursor ",
    {
      "text-sm": !isSelected,
      "active-nav text-black font-apercu font-bold text-xs": isSelected,
      // 'bg-black text-white text-xs rounded-md px-4 py-2 outline-2 outline-black no-underline focus:text-white focus:bg-black active:bg-black active:text-white active:no-underline': link.solid,
      // 'bg-transparent text-black text-xs outline-2 outline-black rounded-md  px-4 py-2 no-underline': link.border,
    }
  );

  if (!link) {
    return <div>ERROR: Issue with link</div>;
  }
  // if (link && link.dropdownData && link.dropdownData.length > 0) {
  //   const config = link.dropdownData.map((item: any) => {
	// 	debugger
  //     return {
  //       key: item.slug,
  //       label: item.title,
  //       href: `/ecommerce-tutorials/${item.slug}`,
	// 	image: item.featured_image,
	// 	updated: item.updated,
	// 	readtime: item.readtime,
	// 	postType: item.post_type.name,
	// 	excerpt: item.excerpt,
  //     };
  //   });

  //   return (
  //     <Dropdown config={config}>
  //       {link.pretty}
  //     </Dropdown>
  //   );
  // }

  if (link && !link.href) {
    return (
      <span className={link.className} role="button">
        {link.pretty}
      </span>
    );
  }

  return (
    <Link className={link && link.className} href={link && link.href} aria-label={link.pretty}>
      {link && link.pretty}
    </Link>
  );
}
