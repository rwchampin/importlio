"use client";
import { useEffect, useRef, useState } from "react";
import DesktopNavigationItem from "./DesktopNavigationItem";
import DesktopNavigationItemDropdown from "./DesktopNavigationItemDropdown";
import { usePathname } from "next/navigation";
import Spinner from "@/app/components/Spinner";


export default function DesktopNavigation({ links , user, isLoading }: any) {

  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<any>(null);
  const activeItem = useRef<any>(null);

  useEffect(() => {
    const item = activeItem;

    const activeItemWidth = item?.current?.offsetWidth;
    const activeItemLeft = item?.current?.offsetLeft;

    setDimensions({
      width: activeItemWidth,
      left: activeItemLeft,
    });
  }, [pathname]);
  return (
    <>
      <div
        className="h-[3px] fixed top-[0px] bg-black"
        style={{
          width: dimensions?.width,
          left: dimensions?.left,
        }}
      />
      {links.map((link: any, i: any) => {
        if (link.type === "mobile") {
          return null;
        }
         
        if (link.dropdown !== null) {
          return (
            <DesktopNavigationItemDropdown
              key={i}
              link={link}
            />
          );
        }
        //   // return (
        //   //   <Dropdown key={i}>
        //   //     <NavbarItem>
        //   //       <DropdownTrigger>
        //   //         <Button
        //   //           disableRipple
        //   //           className="p-0 bg-transparent data-[hover=true]:bg-transparent"
        //   //           endContent={
        //   //             <BiChevronDown className="text-xl text-black" />
        //   //           }
        //   //           radius="sm"
        //   //           variant="light"
        //   //         >
        //   //           {link.pretty}
        //   //         </Button>
        //   //       </DropdownTrigger>
        //   //     </NavbarItem>
        //   //     <DropdownMenu
        //   //       aria-label="ACME features"
        //   //       className="w-[340px]"
        //   //       itemClasses={{
        //   //         base: "gap-4",
        //   //       }}
        //   //     >
        //   //       {link.dropdown.map((item: any, i: any) => {
        //   //         return (
        //   //           <DropdownItem
        //   //             key={i}
        //   //             description={item.description}
        //   //             startContent={item.startContent}
        //   //           >
        //   //             {item.name}
        //   //           </DropdownItem>
        //   //         );
        //   //       })}
        //   //     </DropdownMenu>
        //   //   </Dropdown>
        //   // );
        // }
        return <DesktopNavigationItem ref={activeItem} key={i} link={link} user={user} isLoading={isLoading} />;
        // return (
        //   <NavbarItem key={i}>
        //     <Link color="foreground" href={link.href}>
        //       {link.pretty}
        //     </Link>
        //   </NavbarItem>
        // );
      })}
    </>
  );
}
