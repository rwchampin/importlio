"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const AvatarDropdown: any = dynamic(() => import("@/components/common/Avatar"));
const Primary: any = dynamic(() => import("@/app/components/buttons/Primary"));



export default function LoginOrAvatar() {
  const { data: session, status } = useSession();
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

 
  if(session){
    debugger
    return (
         <AvatarDropdown 
          user={session.user}
         />
    )
  }

  const handleLogin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  };


  return (
    <>

      {pathname !== "/auth/login" && (
        <Primary onClick={handleLogin} target="_blank" variant="solid">
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
