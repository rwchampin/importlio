import { useLogoutMutation } from "@/redux/slices/apiSlice";
import { logout as setLogout } from "@/redux/slices/authSlice";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
const Avatar: any = dynamic(() => import("@/components/common/Avatar"));
const Primary: any = dynamic(
  () => import("@/components/common/buttons/Primary")
);

export default function LoginOrAvatar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const authLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Logout",
      onClick: handleLogout,
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

  if (isAuthenticated) {
    return <Avatar />;
  }

  return (
    <>
      {pathname !== "/auth/login" && (
        <Primary href="/auth/login" solid variant="solid">
          Login
        </Primary>
      )}
      {pathname !== "/auth/register" && (
        <Primary href="/auth/register" outline variant="outline">
          Register
        </Primary>
      )}
    </>
  );
}
