"use client"
import Link from "next/link";
import {Chip} from "@nextui-org/react";


export default function Badge({
    children,
    startContent,
    endContent,
    variant = "faded",
    color = "default",
    size = "sm",
    radius = "medium",
    avatar = false,
    isDisabled = false,
    classNames, 
    href,
    type
}) {

    const el = (
        <Chip
        startContent={startContent}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        className={`text-[.6rem] whitespace-nowrap overflow-x-scroll ${classNames}`}
        endContent={endContent}

      >
        {children}
      </Chip>
    );

    if (href) {
        return (
            <Link
                href={`/ecommerce-tutorials/${type}/${href}`}
                >
                    {el}
                </Link>
        )
    }

  return (

        el

  );
}
