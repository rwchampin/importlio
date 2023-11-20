"use client";
import { useEffect,  useState } from "react";

import { InputProps } from "@/lib/constants";

import { Textarea, Input as NextUiInput } from "@nextui-org/react";

import dynamic from "next/dynamic";

import {
  BsLockFill,
  BsPersonFill,
  BsEnvelopeFill,
} from 'react-icons/bs'
 
 
const PasswordIcon: any = dynamic(() => import("@/components/forms/input/PasswordIcon"), {
  ssr: false,
});

const Editor: any = dynamic(() => import("@/components/forms/Editor"), {
  ssr: false,
});

const Select: any = dynamic(() => import("@/components/forms/Select"), {
  ssr: false,
});

const MultiSelect: any = dynamic(() => import("@/components/forms/MultiSelect"), {
  ssr: false,
});

 
 
 
 
 
const FileField: any = dynamic(() => import("@/components/forms/FileField"), {
  ssr: false,
});

 

const Input = ({
  name,
  type,
  label,
  onChange,
  data,
  children,
  // value,
  placeholder,
  classNames,
  link,
  description,
  errors = [],
  required = false,
  startContent,
  endContent,
  beforeContent,
  afterContent,
}:InputProps) => {
  const [value, setValue] = useState<any>(true);
  const [options, setOptions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    // if(data.length > 0 && typeof data[0] === "object") {
    //   setOptions(data);
    //   return
    // }
    if(options.length === 0 && data && data !== null && typeof data === "function") {
      data().then((res:any) => {
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

  const inputStyle = {
    label: "text-black/50 dark:text-white/90",
    input: [
      "bg-transparent border-none outline-none",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-xl",
      "bg-input",
      "hover:bg-input",
      "!cursor-text",
    ],
  }


  const getStartContent = (type: string) => {

    switch (type) {
      case "email":
        return <BsEnvelopeFill className="text-black/50 dark:text-white/90" />;
      case "password":
      case "re_password":
        return <BsLockFill className="text-black/50 dark:text-white/90" />;
      default:
        return null;
    }
  }
 

  let commonInputProps = {
    // onFocus: handleFocus,
    // onBlur: handleBlur,
    name,
    type,
    onChange,
    // value,
    // startContent: <Icon type={startContent} className="text-gray-500" />,

    // endContent:invalid && <Icon type="error" className="text-red-500" />,
    isRequired: required,
    label,

    description,
    isInvalid: errors.length > 0 ? true : false,
    startContent: getStartContent(type),
    // color:invalid === true ? "danger" : "success",
    // errorMessage: invalid === true ? "Please enter a value.  This field is required." : '',
  };

  let selectInputProps = {
    ...commonInputProps,
    options,
  };

  let richTextProps = {
    ...commonInputProps,
  };

  let textAreaProps = { 
    ...commonInputProps,
  }

  let inputElementProps = {
    autoComplete: getAutoComplete(type),
    ...commonInputProps,
  }

 



  const getInput = (type: string) => {
    switch (type) {
      case "select":
        return (
          <Select
            {...selectInputProps}
            options={options}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
          {...selectInputProps}
            options={options}
          />
        );
      break;
      case "richtext":
        return (
          <Editor
          {...richTextProps}
          />
        );
        break;

      case "textarea":
        return (
          <Textarea
            {...textAreaProps}
          />
        );
        break;
      case 'password':
        return (
          <NextUiInput
              isClearable
              size="lg"
              classNames={inputStyle}
            {...inputElementProps}
              type={passwordVisible ? "text" : "password"}
              endContent={<PasswordIcon isVisible={passwordVisible} toggleVisibility={() => setPasswordVisible(!passwordVisible)} />}
              startContent={<BsLockFill className="text-black/50 dark:text-white/90" />}
              />
        );
      case "file":
        return (
          <FileField
            {...inputElementProps}
          />
        );
        break;
       

      default:
        return (
            <NextUiInput
              isClearable
              size="lg"
              classNames={inputStyle}
            {...inputElementProps}
              />

        );
    }
  };



  return (
   
 

      <>
      {beforeContent}
      {getInput(type)}
      {afterContent}
      {errors && errors.map((error:any, i:number) => {
        return (
          <div key={i} className="text-xs mt-2 text-red-500">{error}</div>
        )
      }
      )}
      </>
     
  );
};

export default Input;
