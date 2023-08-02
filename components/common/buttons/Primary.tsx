import cn from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props { 
  solid?: boolean;
  outline?: boolean;
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset"; // Specify the allowed values for type prop
  [rest: string]: any;
}

export default function Button({
  children = "Submit",
  className,
  color="black",
  onClick,
  variant="solid",
  href,
  type="button",
  ...rest
}: Props) {
  const buttonClasses = cn(
    `flex items-center justify-center text-sm uppercase min-w-[100px] h-input w-full rounded-lg font-bold font-apercu-bold no-underline text-xs shadow-lg  hover:shadow-2xl hover:pointer-cursor hover:bg-button-hover`,
    {
      "bg-button hover:bg-button-hover text-white text-xs": variant === "solid",
      "border-2 border-button text-xs  hover:border-button-hover hover:text-offwhite": variant === "outline",
    },
    className
  );

  if (href) {
    return (

        <Link className={buttonClasses} href={href} onClick={onClick} {...rest}>
          {children}
        </Link>

    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type} // Add the type prop to the button element
      {...rest}
    >
      {children}
    </button>
  );
}
