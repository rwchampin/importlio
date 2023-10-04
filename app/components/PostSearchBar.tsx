"use client";

import { Input as NextUiInput } from "@nextui-org/react";
import Icon from "@/app/components/Icon";
export default function PostSearchBar() {
  return (
    <div className="bg-white sticky top-0 z-50 p-3">
      <NextUiInput
        isClearable={true}
        placeholder="Search"
        width="100%"
        size="lg"
        startContent={<Icon type="search" />}
        className="sticky top-0 left-0 z-10"
      />
    </div>
  );
}
