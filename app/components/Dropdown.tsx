import React from "react";
import {
  Dropdown as DD,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import Link from "next/link";

interface DropdownItem {
  key: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
interface DropdownConfig {
  children: React.ReactNode;
  config: DropdownItem[];
}
export default function Dropdown({ children, config }: DropdownConfig) {
  return (
    <DD placement="bottom-start">
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={config}>
        {(item:any) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            <div className="flex items-center">
              <Link href={item.href}>
                <img className="w-12 h-12 rounded-lg mr-2" src={item.image} />
              </Link>
              <Link href={item.href}>
                <span className="flex flex-col text-xxs justify-between items-center w-full">
                  <div className="flex justify-between items-center w-full">
                    <span>fdfdf{item.postType}</span>
                    <span>{item.readtime} read</span>
                  </div>
                  <h3>{item.label}</h3>
                </span>
              </Link>
            </div>
          </DropdownItem>
        )}
      </DropdownMenu>
    </DD>
  );
}
