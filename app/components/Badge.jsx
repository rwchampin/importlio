"use client"
import Link from "next/link";
import {Chip} from "@nextui-org/react";


export default function Badge({
    children,
    startContent,
    endContent,
    variant = "filled",
    color = "success",
    size = "medium",
    radius = "medium",
    avatar = false,
    isDisabled = false,
    classNames, 
    href,
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
        classNames={classNames}
        endContent={endContent}

      >
        {children}
      </Chip>
    );

    if (href) {
        return (
            <Link
                href={href}
                >
                    {el}
                </Link>
        )
    }

  return (

        el

  );
}
