"use client";
// import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BiLockAlt } from "react-icons/bi";

import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import CustomLink from "./CustomLink";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar() {
  const { data: user, isLoading } = useRetrieveUserQuery();

  // const { getUser, isLoading, isAuthenticated } = auth;
  const [useri, setUser] = useState<any>(null);

  useEffect(() => {
    if (!user && !isLoading) {
      setUser(user);
    }
  }, [isLoading])

// alert(`user: ${JSON.stringify(user)}`)
 

  if (useri && !isLoading) {
    return <Avatar user={useri} />;
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
