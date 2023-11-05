"use client";
// import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BiLockAlt } from "react-icons/bi";
import Link from "next/link";

import { Divider } from "@nextui-org/react";

import useAuth from "@/hooks/use-auth";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar( ) {
  const { user, isAuthenticated } = useAuth();
// alert(`user: ${JSON.stringify(user)}`)
  const btnStyle =
    "flex items-center justify-center gap-1 md:flex lg:rounded-xl lg:h-input lg:w-[120px] xl:w-[150px] lg:hover:shadow-lg";

  if (isAuthenticated && user) {
    return <Avatar user={user} />;
  }

  return (
    <>
      <Link
        href="/auth/login"
        
        className={`${btnStyle} lg:bg-button lg:text-offwhite`}
      >
        <BiLockAlt className="text-xl" />
        Login
      </Link>

      <Divider
        orientation="vertical"
        className="hidden md:inline h-4 w-[2px] bg-black/30 lg:hidden"
      />

      <Link
        href="/auth/register"
        
        className={`hidden ${btnStyle} lg:border-2 lg:border-button `}
      >
        FREE TRIAL
      </Link>
    </>
  );
}
