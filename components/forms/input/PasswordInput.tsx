import React from "react";

import { InputProps } from "@/lib/constants";

import {Input} from "@nextui-org/react";

import Icon from "@/components/Icon";

export default function PasswordInput(props: InputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <Icon type="closed-eye" className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <Icon type="open-eye" className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
    />
  );
}
