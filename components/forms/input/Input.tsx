"use client";
import {  useState } from "react";
import Link from "next/link";
import FileField from "../FileField";
import { InputProps } from "@/lib/constants";
import InputIcon from "./InputIcon";
import dynamic from "next/dynamic";


const Editor: any = dynamic(() => import("@/components/forms/Editor"), {
  ssr: false,
});

const Select: any = dynamic(() => import("@/components/forms/Select"), {
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
  required = false,
}:InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

 

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
    data,
    name,
    type,
    onChange,
    value,
    required,
    placeholder: placeholder || getPlaceholder(type),
    autoComplete: getAutoComplete(type),
    className: `pl-10 w-full h-input bg-input hover:bg-input-hover hover:text-offwhite hover:cursor-pointer text-offgray text-sm h-full font-bold font-apercu-bold outline-none focus:outline-none hover:outline-none ${className}`,
  };


  const getInput = (type: string) => {
    switch (type) {
      case "select":
        return (
          <Select
            {...inputElementProps}
          />
        );
      case "multiselect":
        return (
          <Select
          {...inputElementProps}
            selectionMode="multiple"
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

      case "multiselect":
        return (
          <Select
          {...inputElementProps}
          selectionMode="multiple"
            options={data.map((item:any) => {

              return {
                label: item.name,
                value: item.id,
              }
            }
            )}
            />
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
          <div className="relative overflow-hidden  hover:bg-offgray rounded-lg h-input hover:shadow-lg flex items-center justify-start bg-input w-full">
            <InputIcon type={type} isFocused={isFocused} />
            <input {...inputElementProps} value={value} onChange={onChange} />
          </div>
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
