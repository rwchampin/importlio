"use client";

import {
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";

import { BiChevronDown } from "react-icons/bi";
import "@/assets/styles/nav.scss";
const DesktopNavigationItemDropdown = ({ link }: any) => {
  return (
    <Dropdown
      closeOnSelect={true}
      // also set the placement to whatever you want
      placement="bottom-start"
    >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="gap-1"
          >
            {link.pretty}
            <BiChevronDown
              className="text-[30px] text-black"
            />
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={link.dropdown.ariaLabel}
        className="w-full md:w-[340px] gap-4"
        itemClasses={{
          base: "group hover:cursor-pointer bg-gray-100 line-clamp-2 gap-2 whitespace-wrap break-words whitespace-break-spaces text-ellipsis",
          title:
            "line-clamp-1 text-ellipsis text-gray-500 group-hover:text-gray-400",
          description:
            "line-clamp-2 text-ellipsis text-gray-500 group-hover:text-gray-400",
        }}
        items={link.dropdown.items}
      >
        {(item: any) => (
          <DropdownItem
            startContent={
              <item.icon className="text-2xl text-black group-hover:text-gray-400" />
            }
            showDivider={true}
            key={item.pretty}
            title={item.pretty}
            description={item.description}
            href={item.href}
          />
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DesktopNavigationItemDropdown;
