"use client";
// import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BiLockAlt } from "react-icons/bi";

import { Divider } from "@nextui-org/react";
import { useEffect } from "react";

import CustomLink from "./CustomLink";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar({
  auth
}:any) {

const {
  user,
  isAuthenticated,
  isLoading,
} = auth;
// alert(`user: ${JSON.stringify(user)}`)
 

  if (isAuthenticated) {
    return <Avatar user={user} />;
  }

  return (
    <>
      <CustomLink
        href="/auth/login"
        variant="solid"
        size="sm"
      >
        <BiLockAlt className="text-xl" />
        Login
      </CustomLink>

      <Divider
        orientation="vertical"
        className="hidden md:inline h-4 w-[2px] bg-black/30 lg:hidden"
      />

      <CustomLink
        href="/auth/register"
        variant="outline"
        size="sm"
      >
        FREE TRIAL
      </CustomLink>
    </>
  );
}
