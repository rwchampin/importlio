"use client";
import dynamic from "next/dynamic";
import { Disclosure } from "@headlessui/react";
const RiMenu5FillDynamic: any = dynamic(() =>
  import("react-icons/ri").then((mod) => mod.RiMenu5Fill)
);
const RxCross2Dynamic: any = dynamic(() =>
  import("react-icons/rx").then((mod) => mod.RxCross2)
);
export default function MobileToggle({
    open,
    }: {
    open: boolean;
}) {
  return (
        <div className="inset-y-0 right-0 flex items-center md:hidden z-[9999999]">
          <Disclosure.Button
            id="menu-button"
            aria-haspopup="true"
            aria-controls="menu"
            className="inline-flex aspect-square items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <RxCross2Dynamic
                className="block h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <RiMenu5FillDynamic
                className="block h-6 w-6"
                aria-hidden="true"
              />
            )}
          </Disclosure.Button>
        </div>
  )
}
