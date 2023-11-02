import { logout } from "@/redux/features/authSlice";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  Avatar as AA,
} from "@nextui-org/react";
import { logout as setLogout } from '@/redux/features/authSlice';
import { useLogoutMutation } from '@/redux/features/authApiSlice';

import { HiOutlineMail } from 'react-icons/hi'
import {
    BsPersonCircle,
} from 'react-icons/bs'
import {GiPokecog} from 'react-icons/gi'
import {
    BiLogOutCircle
} from 'react-icons/bi'
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Avatar({ user }: any) {
  const router = useRouter();
  const dispatch = useAppDispatch();
	const [logout] = useLogoutMutation();

  const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
        router.push("/");
        toast.success("Logged out");
			});
	};
  const links:any = [
    {
      key: "profile",
      label: "Profile",
      href: "/account/profile",
      icon: () => <BsPersonCircle />
    },
    {
      key: 'notifications',
      label: 'Notifications',
      href: '#',
      icon: () => <HiOutlineMail />
    },
    {
      key: "settings",
      label: "Settings",
      href: "/account/settings/",
        icon:() =>  <GiPokecog />
    } 
  ];
  const itemStyle = 'flex items-center gap-2'
  return (
    <NavbarContent as="div" justify="center">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <AA
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={user?.first_name + " " + user?.last_name || user?.email}
            size="sm"
            src={user?.avatar}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">
                {user?.email}
            </p>
          </DropdownItem>
          {links.map((link:any):any => {
            const { key, label, href } = link;
            return (
              <DropdownItem
               key={key}
                
               >
                <div className={itemStyle}>
                <link.icon />
                <a href={href}>{label}</a>
                </div>
              </DropdownItem>
            );
          })}

          <DropdownItem key="logout" color="danger" 
            onClick={handleLogout}
          >
            <div className={itemStyle}>
            <BiLogOutCircle />
            Log Out
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
}
