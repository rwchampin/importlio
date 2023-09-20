"use client";
import React, { forwardRef } from "react";
import { Input } from "@nextui-org/react";
import useModal from "@/hooks/useModal";

import { SearchIcon } from "./SearchIcon";
import { CloseFilledIcon } from "./CloseFilledIcon";
import { ResultDropdown } from "./ResultDropdown";

const styles = {
  label: "text-black/50 dark:text-white/90 hidden",
  input: [
    "bg-red-500",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    "h-[60px] border-none outline-none ring-0 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-white/10 focus:ring-2 focus:ring-offset-2 rounded-none",
  ],
  innerWrapper: "bg-transparent h-[60px] gap-0 flex",
  inputWrapper: [
    "bg-default-200",
    "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-default-200/70",
    "focus-within:!bg-default-200/50 focus:rounded-none",
    "dark:hover:bg-default/70",
    "dark:focus-within:!bg-default/60",
    "!cursor-text",
    "h-auto",
    "[transform-origin:top] flex flex-col",
    "focus-within:rounded-b-none mt-10",
  ],
};



const MyInput = forwardRef((props, ref) => {
  const { setModal, toggleModal } = useModal();
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);

  };
 
  // const labelContent = <label {...getLabelProps()}>{label}</label>;

 
 
  return (
    <Input
    size="lg"
    isClearable
    type="text"
    placeholder="Enter product sources"
    onClear={() => console.log("input cleared")}
    className="core-input max-w-2xl bg-input mt-5 mx-auto rounded-lg"
  />
  );
});

MyInput.displayName = "MyInput";

export default MyInput;
