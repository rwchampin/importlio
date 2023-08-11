"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import FileField from "./FileField";
import { HiOutlineMail } from "react-icons/hi";
import Combobox from "./ComboBox";
import PostTypeSelect from "@/components/forms/PostTypeSelect";
import { IoLockClosedOutline as PasswordIcon } from "react-icons/io5";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import dynamic from "next/dynamic";

const Editor: any = dynamic(() => import("@/components/forms/Editor"), {
  ssr: false,
});

interface Props {
  labelId: any;
  type?: any;
  data?: any;
  onChange:  any
  value: any;
  children?: any;
  placeholder?: any;
  link?: any
  required?: any;
  className?: any;
}

const InputIcon: React.FC<{ type: string; isFocused: boolean }> = ({
  type,
  isFocused,
}) => {
  let iconClassName = `input-svg z-[99999] h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 ${
    isFocused ? "stroke-gray-1" : "stroke-gray-dark-8"
  }`;

  switch (type) {
    case "email":
      return <HiOutlineMail className={iconClassName} />;
    case "password":
      return <PasswordIcon className={iconClassName} />;
    case "search":
      return <SearchIcon className={iconClassName} />;
    default:
      return null;
  }
};

const Input: React.FC<Props> = ({
  labelId,
  type,
  onChange,
  data,
  value,
  children,
  placeholder,
  className,
  link,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const renderAutomplete = (type: string) => {
    switch (type) {
      case "text":
        return "username";
      case "password":
        return "current-password";
      default:
        return "off";
    }
  };

  const getPlaceholder = (type: string) => {
    switch (type) {
      case "email":
        return "john@gmail.com";
      case "password":
        return "********";
      case "search":
        return "Search";
      default:
        return "";
    }
  };

  let inputElementProps = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    id: labelId,
    data,
    name: labelId,
    type,
    onChange,
    value,
    required,
    placeholder: placeholder || getPlaceholder(type),
    autoComplete: "on",
    className: `pl-10 w-full h-input bg-input hover:bg-input-hover hover:text-offwhite hover:cursor-pointer text-offgray text-sm h-full font-bold font-apercu-bold outline-none focus:outline-none hover:outline-none ${className}`,
  };


  const getInput = (type: string) => {
    switch (type) {
      case "select":
        return (
          <PostTypeSelect
            onChange={onChange}
            data={data}
            value={value}
            placeholder={placeholder}
            name={labelId}
            type={type}
            required={required}
            label={labelId}
            labelId={labelId}
          />
        );
        break;
      case "richtext":
        return (
          <Editor
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={labelId}
            type={type}
            required={required}
            label={labelId}
            labelId={labelId}
          />
        );
        break;

      case "textarea":
        return (
          <textarea
            onChange={onChange}
            value={value}
            placeholder={''}
             
            name={labelId}
           
            required={required}


            className={` w-full bg-input hover:bg-input-hover hover:text-offwhite hover:cursor-pointer text-offgray text-sm h-full font-bold font-apercu-bold outline-none focus:outline-none hover:outline-none ${className}`}
          ></textarea>
        );
        break;

      case "multiselect":
        return (
          <Combobox
            onChange={onChange}
            value={value}
            data={data}
            placeholder={placeholder}
            name={labelId}
            type={type}
            required={required}
            label={labelId}
            labelId={labelId}
          />
        );
        break;
      case "file":
        return (
          <FileField
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={labelId}
            type={type}
            required={required}
            label={labelId}
            labelId={labelId}
            labelText={"Upload Image"}
          />
        );
        break;
       

      default:
        return (
          <div className="relative overflow-hidden  hover:bg-offgray rounded-lg h-input hover:shadow-lg flex items-center justify-start bg-input w-full min-w-[400px]">
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
          htmlFor={labelId}
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
