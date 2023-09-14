"use client";
import React, { forwardRef } from "react";
import { useInput } from "@nextui-org/react";
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

  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    // label: "Search",
    type: "search",
    placeholder: "Type to search...",

    onFocus: handleFocus,
    onBlur: () => {
      setIsFocused(false);
      console.log("blur");
    },
    startContent: (
      <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const end = React.useMemo(() => {
    if (isClearable) {
      return (
        <span {...getClearButtonProps()}>
          {endContent || <CloseFilledIcon />}
        </span>
      );
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      <div
        {...getInputWrapperProps()}
        role="button"
        onClick={() => {
          domRef.current?.focus();
        }}
      >
        {shouldLabelBeInside ? labelContent : null}
        {innerWrapper}
        <ResultDropdown show={isFocused} />
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
});

MyInput.displayName = "MyInput";

export default MyInput;
