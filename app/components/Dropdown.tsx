import React from "react";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

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
export default function Dropdown({ children, config }:DropdownConfig) {


  return (
    <DD>
      <DropdownTrigger>
       {children} 
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={config}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </DD>
  );
}
