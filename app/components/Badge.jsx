"use client"
import Link from "next/link";
import {Chip} from "@nextui-org/react";


export default function Badge({
    children,
    startContent,
    endContent,
    variant = "faded",
    color = "warning",
    size = "small",
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
        avatar={avatar}
        isDisabled={isDisabled}
        className={`text-xxs whitespace-nowrap overflow-x-scroll ${classNames}`}
        endContent={endContent}

      >
        {children}
      </Chip>
    );

    if (href) {
        return (
            <Link
                href={`/ecommerce-tutorials/?type=${type}&name=${href}`}
                >
                    {el}
                </Link>
        )
    }

  return (

        el

  );
}
