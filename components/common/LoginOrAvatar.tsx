"use client";
import { useLogoutMutation } from "@/redux/slices/apiSlice";
import { logout as setLogout } from "@/redux/slices/authSlice";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";
const AvatarDropdown: any = dynamic(() => import("@/components/common/Avatar"));
const Primary: any = dynamic(() => import("@/app/components/buttons/Primary"));



export default function LoginOrAvatar() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [logout] = useLogoutMutation();

  // const { isAuthenticated } = useAppSelector((state) => state.auth);

  // const handleLogout = () => {
  //   logout(undefined)
  //     .unwrap()
  //     .then(() => {
  //       dispatch(setLogout());
  //     });
  // };

  
  const authLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Logout",
      // onClick: handleLogout,
    },
  ];

  const guestLinks = [
    {
      name: "Login",
      href: "/auth/login",
    },
    {
      name: "Register",
      href: "/auth/register",
    },
  ];

  // if (isAuthenticated) {
  //   return <Avatar />;
  // }
  if(session){
    return (

         <AvatarDropdown user={session.user} />
    )
  }
  return (
    <>

      {pathname !== "/auth/login" && (
        <Primary onClick={()=> signIn("google", {
          callbackUrl: `/dashboard`,
        })} target="_blank" variant="solid">
          Login
        </Primary>
      )}
      {pathname !== "/auth/register" && (
        <Primary href="/auth/register" target="_blank" variant="outline">
          Register
        </Primary>
      )}
     
    </>
  );
}
