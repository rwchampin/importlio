"use client";
import { Spinner } from "@/app/components";
import {useAppSelector, useAppDispatch} from "@/redux/hooks";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const AvatarDropdown: any = dynamic(() => import("@/components/common/Avatar"));
const Primary: any = dynamic(() => import("@/app/components/buttons/Primary"));



export default function LoginOrAvatar() {
  const {isAuthenticated, isLoading, user} = useAppSelector((state) => state);
  const pathname = usePathname();


  
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

  if(isLoading){
    return <>TITS<Spinner />TITS</>
  }
 
  if(user){
    return (
         <AvatarDropdown 
          user={user}
         />
    )
  }
 


  return (
    <>

      {pathname !== "/auth/login" && (
        <Primary 
        href="/auth/login"
       variant="solid">
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
