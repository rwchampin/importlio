"use client";
import { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";


import Urls from "./Urls";
import { BsQuestionCircleFill, BsSearch, BsXCircleFill } from "react-icons/bs";

import toast from "react-hot-toast";
import { useInput, Button  } from "@nextui-org/react";
import Spinner from "@/app/components/Spinner";
const styles = {
  label: "flex text-black/50 dark:text-white/90 hidden",
  input: [
    "h-input p-2 border-0 outline-none ring-0 shadow-none",
    "focus:bg-transparent focus:border-none focus:outline-none focus:ring-0",
    // "placeholder:text-gray-800",
    "group-hover:placeholder:text-white",
    // "h-input",
  ],
  innerWrapper: ["flex gap-2 justify-around md p-1"],
  inputWrapper: ["main-inner-wrapper bg-input flex", "mt-10"],
};

const s =
  "bg-button text-sm text-white rounded-md flex flex-1 items-center justify-center h-input";

const errors = {
  INVALID_URL: "Please enter a valid URL.",
  DUPLICATE_URL: "This URL is already in the list.",
};

export default function ProductImportInput() {

  
  const [inputState, setInputState] = useState<any>({
    loading: false,
    value: "",
    errors: [],
    urls: [],
    scrapeAttempts: 0,
    results: [],
  });
  const dropzone = useDropzone({
    noClick: true,
  });
  const open = dropzone.open;
  const getRootDropProps = dropzone.getRootProps;
  const getDropProps = dropzone.getInputProps;

 


  const setErrors = (error: any) => {
    if (inputState.errors.indexOf(error) === -1) {
      setInputState({ ...inputState, errors: [...inputState.errors, error] });
    }
  };

  const setValue = (value: any) => {
    // if no value is passed, clear the input and errors
    if (!value) {
      setInputState({ ...inputState, value: "", errors: [] });
      return;
    }
    setInputState({ ...inputState, value });
  };

 
  
   
  const parseAndClean = (value: any) => {debugger
    // Split the input value by comma or new line
    const values = value.split(/[\s,]+/);
    // Remove any empty strings from the array
    const cleanedValues = values.filter((val: any) => val !== "");

    return cleanedValues;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(inputState.value.length === 0) {
      toast.error("Please enter a valid url")
      return
    }

    // add urls to state
    setInputState({ ...inputState, urls: [...inputState.urls, inputState.value], loading: false, value: "" });
  }

  const handleScrape = async (e: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/scrape/get-data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         url: 'https://www.amazon.com/Lincoln-Design-Copper-Collectible-Capsule/dp/B0CFYYBHK3/ref=zg_bsnr_c_coins_sccl_1/131-6358916-2323847?pd_rd_w=Fb8kg&content-id=amzn1.sym.309d45c5-3eba-4f62-9bb2-0acdcf0662e7&pf_rd_p=309d45c5-3eba-4f62-9bb2-0acdcf0662e7&pf_rd_r=YZPP0Q9X5BMF9HWBP64G&pd_rd_wg=PoxEm&pd_rd_r=a83f1079-bd51-480c-bf0d-b0d58dd2f102&pd_rd_i=B0CFYYBHK3&th=1',
      }),
    });

    debugger;
    const data = await response.json();
    debugger;
    if (data.errors) {
      setInputState({ ...inputState, errors: data.errors, loading: false });
      return;
    }

    debugger
    // const value = e.target.value;
    // const isValidUrl = validateInputValue(value);

    // if (!isValidUrl) {
    //   setErrors(["Please enter a valid url"]);
    //   return;
    // }

    // if (isValidUrl && value.length > 0) {
    //   setErrors([]);

    // }
    // return false;
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
    // this is just for the example, the props bellow should be passed by the parent component
    label: "Search",
    type: "search",
    placeholder: "Enter product sources",
    // onValueChange: handleInputChange,
    onClear: () => {
      setErrors([]);
      setValue([]);
    },
    isClearable: true,
    isRequired: true,
    size: "lg",
    variant: "bordered",
    onValueChange: setValue,
    value: inputState.value,
    startContent: (
      <BsSearch className="text-black/70  pointer-events-none flex-shrink-0 h-5 w-5" />
    ),
    endContent: (
      <BsXCircleFill className="text-black/70  pointer-events-none flex-shrink-0 h-5 w-5" />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const end = useMemo(() => {
    if (isClearable) {
      return (
        <span {...getClearButtonProps()}>
          {endContent || <BsXCircleFill />}
        </span>
      );
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const innerWrapper = useMemo(() => {
    // if (startContent || end) {
    return (
      <div {...getInnerWrapperProps()}>
        {startContent}
        <input {...getInputProps()} />

        {end}
      </div>
    );
    // }
  }, [startContent, end, getInputProps, getInnerWrapperProps]);


  const handleAdd = () => {
    setInputState({
      ...inputState,
      results: [],
    })

    toast.success("Products added to Shopify successfully!")
  }
  if (inputState.loading) {
    return <Spinner lg />;
  }

  return (
    <div
      {...getRootDropProps()}
      className={`flex flex-col gap-3 w-full ${
        inputState.errors.length > 0 ? "error" : ""
      }`}
    >
      {inputState.results.length === 0 && (
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label className="flex pb-2">
          Enter any Amazon product url(s) or choose a file of product urls.
          <BsQuestionCircleFill />
        </label>

        <div className="flex gap-2 relative">
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
            </div>

            {description && <div {...getDescriptionProps()}>{description}</div>}
            {errorMessage && (
              <div {...getErrorMessageProps()}>{errorMessage}</div>
            )}
          </Component>
          <Button
            className="bg-button text-sm text-white rounded-lg flex w-full md:max-w-[150px] h-full items-center justify-center"
            onClick={() => {
              open();
            }}
          >
            Upload File
          </Button>
        </div>
        {inputState.errors.length > 0 && (
          <div className="flex flex-col gap-3 w-full">
            {inputState.errors.map((error: any, i: any) => (
              <div key={i} className="text-red-500">
                {error}
              </div>
            ))}
          </div>
        )}
        {/* {errors.length === 0 && (
          <div className="flex flex-col gap-3 w-full">
            {instructions}
          </div>
        )} */}
      </form>
      )}
      <Urls urls={inputState.urls} />
    </div>
  );
}
