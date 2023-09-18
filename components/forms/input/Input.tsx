"use client";
import { useEffect,  useState } from "react";

import { InputProps } from "@/lib/constants";

import { Textarea, Input as NextUiInput } from "@nextui-org/react";

import dynamic from "next/dynamic";


 

const Editor: any = dynamic(() => import("@/components/forms/Editor"), {
  ssr: false,
});

const Select: any = dynamic(() => import("@/components/forms/Select"), {
  ssr: false,
});

const MultiSelect: any = dynamic(() => import("@/components/forms/MultiSelect"), {
  ssr: false,
});

const PasswordInput:any = dynamic(() => import("@/components/forms/input/PasswordInput"), {
  ssr: false,
});

 
 
 
 
const FileField: any = dynamic(() => import("@/components/forms/FileField"), {
  ssr: false,
});

 
const Icon:any = dynamic(() => import("@/components/Icon"), {
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
  classNames,
  link,
  description,
  validationState,
  isInvalid,  
  errorMessage = '',
  required = false,
  startContent,
  endContent
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

  let commonInputProps = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    name,
    type,
    onChange,
    value,
    startContent: <Icon type={startContent} className="text-gray-500" />,

    endContent:isInvalid && <Icon type="error" className="text-red-500" />,
    isRequired: required,
    label,
    defaultValue: placeholder || getPlaceholder(type),
    errorMessage,
    description,
    validationState: updatedValidationState,
    
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
          <PasswordInput
            {...inputElementProps}
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
            {...inputElementProps}
              />

        );
    }
  };



  return (
   
 

      <>{getInput(type)}</>
     
  );
};

export default Input;
