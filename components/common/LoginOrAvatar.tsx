"use client";
import Spinner from "@/app/components/Spinner";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import Button from "@/app/components/buttons/Button";

import { logout } from "@/redux/features/authSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  // const [userAccount, setUserAccount] = useState<any>(null);

  // const dispatch = useAppDispatch();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (user && userAccount === null) {
  //     setUserAccount(user);
  //   }
  // }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return <Spinner lg />;
  }

  if (user && isAuthenticated) {
    return <Avatar user={user} handleLogout={handleLogout} />;
  }

  return (
    <>
      {pathname !== "/auth/login" && (
        <Button href="/auth/login" variant="solid">
          Login
        </Button>
      )}
      {pathname !== "/auth/register" && (
        <Button href="/auth/register" target="_blank" variant="bordered">
          Register
        </Button>
      )}
    </>
  );
}
