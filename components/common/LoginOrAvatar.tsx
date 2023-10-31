"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BiLockAlt } from "react-icons/bi";
import Link from "next/link";

import { Divider } from "@nextui-org/react";
import { useAppSelector } from "@/redux/hooks";

// import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  // const [userAccount, setUserAccount] = useState<any>(null); // [user, setUser
  // const { data: user } = useRetrieveUserQuery();

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
        Try for free
      </Link>
    </>
  );
}
