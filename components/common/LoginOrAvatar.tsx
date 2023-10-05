"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import Button from "@/app/components/buttons/Button";



import {  useAppSelector } from "@/redux/hooks";

const Avatar: any = dynamic(() => import("@/app/components/Avatar"));

export default function LoginOrAvatar() {
  const { user } = useAppSelector((state) => state.auth);
  // const [userAccount, setUserAccount] = useState<any>(null);

  // const dispatch = useAppDispatch();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (user && userAccount === null) {
  //     setUserAccount(user);
  //   }
  // }, [user]);

 

  

  if (user) {
    return <Avatar user={user}  />;
  }

  return (
    <>
      {pathname !== "/auth/login" && (
        <Button href="/auth/login" variant="solid" className="md:text-xs lg:text-sm">
          Login
        </Button>
      )}
      {pathname !== "/auth/register" && (
        <Button href="/auth/register" target="_blank" variant="bordered" className="md:text-xs lg:text-sm">
          Try for free
        </Button>
      )}
    </>
  );
}
