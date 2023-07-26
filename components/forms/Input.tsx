import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Editor } from "@/components/forms";
import { HiOutlineMail as EmailIcon } from "react-icons/hi";
import { IoLockClosedOutline as PasswordIcon } from "react-icons/io5";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: React.ReactNode;
  placeholder?: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  className?: string;
}

export default function Input({
  labelId,
  type,
  onChange,
  value,
  children,
  placeholder,
  className,
  link,
  required = false,
}: Props) {
  const [focus, setFocus ] = useState(false)
  const renderAutomplete = (type: string) => {
    switch (type) {
      case "text":
        return "username";
        break;
      case "password":
        return "current-password";
        break;
      default:
        return "off";
        break;
    }
  };

  interface IconProps {
    className?: string;
    style?: React.CSSProperties;
  }
  const Icon = ({ className, style }: IconProps) => {
    switch (type) {
      case "email":
        return (
          <EmailIcon
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray ${className}`}
            style={style}
          />
        );
      case "password":
        return (
          <PasswordIcon
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray ${className}`}
            style={style}
          />
        );
      case "search":
        return (
          <SearchIcon
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray ${className}`}
            style={style}
          />
        );

      default:
        return null;
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
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2">
        {type==="textarea"&&(
           


          <Editor
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            autoComplete={"on"}
            name={labelId}
            id={labelId}
            type={type}
          />
        )}
        {type !== "textarea" && (
          <div className="relative overflow-hidden rounded-lg bg-input   hover:bg-offgray  rounded-lg h-input  hover:shadow-lg flex items-center justify-start bg-input w-full min-w-[400px]">
            <Icon
              className={`${focus === true ? "text-offwhite" : "text-black"}`}
            />
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              onMouseOut={() => setFocus(false)}
              onMouseEnter={() => setFocus(true)}
              id={labelId}
              name={labelId}
              type={type}
              onChange={onChange}
              value={value}
              required={required}
              placeholder={placeholder}
              autoComplete={"on"}
              className={`pl-10 w-full h-input bg-transparent   hover:text-offwhite hover:cursor-pointer text-offgray text-sm h-full font-bold font-apercu-bold outline-none focus:outline-none hover:outline-none ${className}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
