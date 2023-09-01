"use client";
import Spinner from "@/app/components/Spinner";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";


import { logout } from "@/redux/features/authSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));


import { useEffect,useState } from "react";

interface User {
  name: string;
  email: string;
}
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default function LoginOrAvatar() {
  const [user, setUser] = useState<any>();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

	const { data:profile, isLoading, isFetching } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuthenticated && profile) {
      debugger
      setUser(profile);
    }
  }, [isAuthenticated, profile]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if(isLoading || isFetching) {
  	return (
  			<Spinner lg />
  	);
  }

  if (user) {
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
