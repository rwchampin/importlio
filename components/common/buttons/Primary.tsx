"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => {};
    href?: string;
    type?: any;
}

export default function Primary({
  children = "Submit",
  className,
  onClick,
    href,
    type,
}: Props) {
  const common = {
    whileHover: {
      scale: 1.02,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
    whileTap: {
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    className: `text-sm font-bold font-apercu-bold text-offwhite bg-offgray w-full max-w-lg rounded-lg h-input hover:cursor-pointer hover:shadow-lg flex items-center justify-center ${className}`,
  };

  const button = {
    ...common,
    type: onClick ? "button" : "submit",
    onClick: onClick,
  };

  const link = {
    ...common,
    href: href,
  };

  if (href) return <motion.a {...link}>{children}</motion.a>;

  return <motion.button {...button}>{children}</motion.button>;
}
