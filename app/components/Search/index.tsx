"use client";
import React, { forwardRef } from "react";
import { useInput } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { CloseFilledIcon } from "./CloseFilledIcon";

import { useRouter } from "next/navigation";
import Link from "next/link";
import DropWrapper from "./DropWrapper";
import useAuth from "@/hooks/use-auth";

const styles = {
  label: "text-black/50 dark:text-white/90 hidden",
  input: [
    "h-input p-2 ring-0 border-none outline-none",
    "focus:bg-transparent focus:border-none focus:outline-none focus:ring-0",
    "placeholder:text-gray-400",
    "group-hover:placeholder:text-gray-500",
    // "h-input",
  ],
  innerWrapper: ["flex gap-2 justify-around rounded-lg p-1"],
  inputWrapper: ["main-inner-wrapper bg-input", "mt-10"],
};

const Search = forwardRef((props: any, ref: any) => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  // const { isAuthen } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();
  const s = 'bg-button text-sm text-white rounded-md flex flex-1 items-center justify-center h-input'
  const onBlur = (e: any) => {
    e.preventDefault();
   
    if(!user || !isAuthenticated) {
       router.push("/auth/login");
      return false;
    }
    
   
   
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
  }: any = useInput<any>({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    label: "Search",
    type: "search",
    placeholder: "Enter product sources",

    isClearable: true,
    isRequired: true,
    size: "lg",
    variant: "bordered",
    startContent: (
      <SearchIcon className="text-black/70  pointer-events-none flex-shrink-0 h-5 w-5" />
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
          <input {...getInputProps()} onMouseDown={onBlur} />
          <Link
            href="/auth/register"
            className="bg-gray-900 text-white p-3 rounded-lg shadow-lg break-keep	whitespace-nowrap	"
          >
            Get Started
          </Link>
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
  const El = () => {
    return (
      <section className="core-search mt-10">
      {/* <div className="w-[340px] h-[300px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"> */}

      <Component {...getBaseProps()}>
        {shouldLabelBeOutside ? labelContent : null}
        <h6>
          Enter any{" "}
          <Link href="https://www.amazon.com/gp/product/B07XJ8C8F3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">
            amazon
          </Link>{" "}
          product link or product results page link to enter them into your{" "}
          <Link href="https://www.shopify.com">Shopify Store</Link>.
        </h6>
        <div
          {...getInputWrapperProps()}
          role="button"
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </div>
        {description && <div {...getDescriptionProps()}>{description}</div>}
        {errorMessage && (
          <div {...getErrorMessageProps()}>{errorMessage}</div>
        )}
      </Component>
      {/* </div> */}
    </section>
    );
  }

  // if(!auth.isAuthenticated) {
  //   return <El />
  // }
  return (
    // <DropWrapper>
      <El />
    // </DropWrapper>
  );
});

Search.displayName = "Search";

export default Search;
