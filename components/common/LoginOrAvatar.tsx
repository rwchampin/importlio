"use client";
import Spinner from "@/app/components/Spinner";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";


import { logout } from "@/redux/features/authSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar() {
  const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const pathname = usePathname();


 

  const handleLogout = () => {
    dispatch(logout());
  };

  if(isLoading) {
  	return (
  			<Spinner lg />
  	);
  }

  if (user && isAuthenticated) {
    return <Avatar user={user} handleLogout={handleLogout} />;
  }

  return (
    <>
      {pathname !== "/auth/login" && (
        <a href="/auth/login" variant="solid">
          Login
        </a>
      )}
      {pathname !== "/auth/register" && (
        <a href="/auth/register" target="_blank" variant="bordered">
          Register
        </a>
      )}
    </>
  );
}
