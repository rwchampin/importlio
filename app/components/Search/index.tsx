"use client";
import React, { forwardRef } from "react";
import { useInput } from "@nextui-org/react";

import { CloseFilledIcon } from "./CloseFilledIcon";
import { shopifyExport } from "./shopifyExport";
import { FaSearch } from "react-icons/fa";


import { useRouter } from "next/navigation";

import CustomLink from "@/components/common/CustomLink";
import CustomButton from "@/components/common/CustomButton";
import DropWrapper from "./DropWrapper";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { setProducts, setSelectedProducts } from "@/redux/features/products/productSlice";
const styles = {
  label: "text-black/50 dark:text-white/90 hidden p-5.5",
  input: [
    "h-input p-2 ring-0 border-none outline-none",
    "focus:bg-transparent focus:border-none focus:outline-none focus:ring-0",
    "placeholder:text-gray-400",
    // "h-input",
  ],
  innerWrapper: ["inner-wrapper flex gap-2 justify-around rounded-md p-1 items-center"],
  inputWrapper: ["main-inner-wrapper bg-input rounded-md p-0.5", "mt-10"],
};

const Search = forwardRef((props: any, ref: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { products, selectedProducts } = useAppSelector((state:any) => state.product);
  const [query, setQuery] = React.useState<any>("");
  
  const getProducts = async (value: any) => {
    const res = await fetch(`/api/products/search/?q=${value}`);

    const { products } = await res.json();

    dispatch(setProducts(products));
  }


  const handleChange = (e: any) => {
    setQuery(e)
    if(e && e.length > 3) {
      getProducts(e)
    }else{
      dispatch(setProducts([]));
    }
  }

  const handleAdd = (e:any) => {
    e.preventDefault()
    const exportedProducts = products.filter((item:any) => selectedProducts.includes(item.id))
    const status = shopifyExport(exportedProducts)

    if(status) {
      dispatch(setSelectedProducts([]))
      dispatch(setProducts([]))
      setQuery("")
    }
  }

   

  const ButtonRow = () => {

    
    if(!products.length) {
      return <CustomLink classNames="h-[100%]" variant="solid" size="sm" href="/auth/register/">REGISTER FREE</CustomLink>
    }

    return (
      <div className="flex gap-2 w-1/4">
      <CustomButton
       onClick={handleAdd}
       variant="solid"
        size="sm"
       >DOWNLOAD CSV</CustomButton>

        <CustomButton
        onClick={handleAdd}
        variant="solid"
        size="sm"
        >IMPORT TO SHOPIFY</CustomButton>

      </div>
    )
  }

  const {
    value,
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
    value: query,
    // this is just for the example, the props bellow should be passed by the parent component
    label: "Search",
    type: "search",
    placeholder: "Search for products by title and/or ASIN",
    onValueChange: handleChange,
    isClearable: true,
    isRequired: true,
    size: "lg",
    variant: "bordered",
    startContent: (
      <FaSearch className="text-black/70  pointer-events-none flex-shrink-0 text-2xl" />
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
          <ButtonRow />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
 

  // if(!auth.isAuthenticated) {
  //   return <El />
  // }
  return (
    <section className="core-search static mt-10">
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      <h3 className="text-2xl font-bold font-montserrat uppercase">
        Try our Product Search Tool
      </h3>
      <p>
        Search our current product catalog! Be sure to check frequently, this provides real-time access to the full, up-to-date & exclusive list of Amazon dropshipping products available for import to your Shopify store.
      </p>
      {/* <h6>
        Enter any{" "}
        <CustomLink
          variant="text"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
         href="https://www.amazon.com/gp/product/B07XJ8C8F3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
         >
          amazon
        </CustomLink>{" "}
        product link or product results page link to enter them into your{" "}
        <CustomLink href="https://www.shopify.com" variant="text" target="_blank">Shopify Store</CustomLink>.
      </h6> */}
      <div
        {...getInputWrapperProps()}
        role="button"
        // onClick={() => {
        //   domRef.current?.focus();
        // }}
      >
        {shouldLabelBeInside ? labelContent : null}
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && (
        <div {...getErrorMessageProps()}>{errorMessage}</div>
      )}
    </Component>
        <DropWrapper />
  </section>
  );
});

Search.displayName = "Search";

export default Search;
