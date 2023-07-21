import { ChangeEvent } from "react";
import Link from "next/link";
import { render } from "@headlessui/react/dist/utils/render";

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
}

export default function Input({
  labelId,
  type,
  onChange,
  value,
  children,
  placeholder,
  link,
  required = false,
}: Props) {
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
  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={labelId}
          className="block text-sm font-bold font-apercu leading-6 text-gray-900"
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
        <input
          id={labelId}
          className="block font-apercu w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 placeholder:font-apercu placeholder:font-bolder focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
          placeholder={placeholder}
          // autoComplete={renderAutomplete(type)}
        />
      </div>
    </div>
  );
}
