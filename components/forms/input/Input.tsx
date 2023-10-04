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
  errors = [],
  required = false,
  startContent,
  endContent,
  beforeContent,
  afterContent,
}:InputProps) => {
  const [initial, setInitial] = useState<any>(true);
  const [options, setOptions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
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

 
 

  let commonInputProps = {
    // onFocus: handleFocus,
    // onBlur: handleBlur,
    name,
    type,
    onChange,
    value,
    // startContent: <Icon type={startContent} className="text-gray-500" />,

    // endContent:invalid && <Icon type="error" className="text-red-500" />,
    isRequired: required,
    label,

    description,
    isInvalid: errors.length > 0 ? true : false,
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
              isClearable={true}
              onClear={() => {
                if(onChange){
                onChange( {target: {value: ''}})
                }
              }}
              size="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "focus:ring-0 focus:border-none focus:outline-none",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
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
