import {Avatar as AA} from "@nextui-org/react";
import { AvatarProps } from "@/lib/constants";
import Dropdown from "./Dropdown";
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
  
    if (user && user.avatar) {
      avatarProps.src = `${process.env.NEXT_PUBLIC_HOST}/${user.avatar}`;
    }
    const handleLogout = () => {
        dispatch(logout());
      };
    const config = [
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
            <AA isBordered={true} {...avatarProps} />
        </Dropdown>
    );
  }