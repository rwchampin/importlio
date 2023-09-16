"use client";
import { useEffect,  useState } from "react";
import Link from "next/link";
import FileField from "../FileField";

import {Input as NextUiInput} from "@nextui-org/react";

import { InputProps } from "@/lib/constants";
import InputIcon from "./InputIcon";
import dynamic from "next/dynamic";
import { on } from "events";


const Editor: any = dynamic(() => import("@/components/forms/Editor"), {
  ssr: false,
});

const Select: any = dynamic(() => import("@/components/forms/Select"), {
  ssr: false,
});

const MultiSelect: any = dynamic(() => import("@/components/forms/MultiSelect"), {
  ssr: false,
});

const TextArea: any = dynamic(() => import("@/components/forms/TextArea"), {
  ssr: false,
});

const Input = ({
  name,
  type,
  label,
  onChange,
  data,
  children,
  value,
  placeholder,
  className,
  link,
  description,
  validationState,
  errorMessage = '',
  required = false,
}:InputProps) => {
  const [options, setOptions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [updatedValidationState, setValidationState] = useState<"valid" | "invalid">(validationState || "valid");
  const [updatedErrorMessage, setErrorMessage] = useState<string>(errorMessage || "")
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    // if(data.length > 0 && typeof data[0] === "object") {
    //   setOptions(data);
    //   return
    // }
    if(options.length === 0 && data && data !== null && typeof data === "function") {
      data().then((res:any) => {
        debugger
        const f = res.map((item:any) => {
          return {
            label: item.name,
            value: item.id
          }
        })
        setOptions(f);
      })
    }
  }, [data, options]);

  const getPlaceholder = (type: string) => {
    switch (type) {
      case "email":
        return "john@gmail.com";
      case "password":
        return "********";
      case "search":
        return "Search";
      default:
        return placeholder
    }
  };

  const getAutoComplete = (type: string) => {
    switch (type) {
      case "email":
        return "email";
      case "password":
        return "current-password";
      default:
        return "on";
    }
  };

  let inputElementProps = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    name,
    type,
    onChange,
    value,
    required,
    label,
    placeholder: placeholder || getPlaceholder(type),
    autoComplete: getAutoComplete(type),
    // className: `w-full h-input bg-input hover:bg-input-hover hover:text-offwhite hover:cursor-pointer text-offgray text-sm h-full font-bold font-apercu-bold outline-none focus:outline-none hover:outline-none ${className}`,
  };

  // const handleChange = (e: any) => {

  //   onChange(e);

  //   if (e.target.value.length > 0 && required) {
  //     setValidationState("valid");
  //     setErrorMessage(null);
  //   } else {
  //     setValidationState("invalid");
  //     setErrorMessage("This field is required");
  //   }

  //   // if (type === "email") {

  //   if(type === "email") {
  //     const emailRegex = /\S+@\S+\.\S+/;
  //     if (!emailRegex.test(e.target.value)) {
  //       setValidationState("invalid");
  //       setErrorMessage("Please enter a valid email address");
  //     } else {
  //       setValidationState("valid");
  //       setErrorMessage(null);
  //     }
  //   }

  // }



  const getInput = (type: string) => {
    switch (type) {
      case "select":
        return (
          <Select
            {...inputElementProps}
            options={options}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
          {...inputElementProps}
            options={options}
          />
        );
      break;
      case "richtext":
        return (
          <Editor
          {...inputElementProps}
          />
        );
        break;

      case "textarea":
        return (
          <TextArea
          {...inputElementProps}
          ></TextArea>
        );
        break;
      case "file":
        return (
          <FileField
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
            type={type}
            required={required}
            label={label}
          />
        );
        break;
       

      default:
        return (


            <NextUiInput
            //   label={label}
            // labelPlacement="inside"
            //   startContent={<InputIcon type={type} isFocused={isFocused} />}
            //  variant="bordered"
            //   isClearable={true}
            //   isRequired={required}
            //   defaultValue={placeholder}
            //   description={description}
            //   // validationState={updatedValidationState}
            //   // errorMessage={updatedErrorMessage}
            // //  {...inputElementProps} 
            // type={type}
            //  value={value}
            //   onChange={onChange} 

            {...inputElementProps}
              />

        );
    }
  };



  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={name}
          className="block text-sm font-bold font-apercu leading-6 text-offgray"
        >
          {children}
        </label>
        {link && (
          <div className="text-sm">
            <Link
              className="font-semibold text-button hover:text-button-hover"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>

      <div className="mt-1 relative">{getInput(type)}</div>
    </div>
  );
};

export default Input;
