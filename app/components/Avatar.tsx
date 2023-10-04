import {Avatar as AA} from "@nextui-org/react";
import { AvatarProps } from "@/lib/constants";
import Dropdown from "./Dropdown/Index";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
export default function Avatar({
    user,
  }:AvatarProps) {
    const dispatch = useAppDispatch();
    const avatarProps:{
        src?: string;
        name?: string;
    } = {};
  
    avatarProps.src = user?.avatar;
    avatarProps.name = `${user?.first_name} ${user?.last_name}`;

    const handleLogout = () => {
        dispatch(logout());
      };
    const config = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            href: '/dashboard'
        },
        {
            key: 'profile',
            label: 'Profile',
            href: '/dashboard/profile'
        },{
            key: 'logout',
            label: 'Logout',
            onClick: handleLogout
        }
    ]

    return (
        <Dropdown
            config={config}
        >
            <AA
             isBordered={true}
                {...avatarProps}
                showFallback
              />
        </Dropdown>
    );
  }