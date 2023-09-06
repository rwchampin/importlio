import {Avatar as AA} from "@nextui-org/react";
import { getInitialsFromName, isValidURL } from "@/lib/functions";
import { AvatarProps } from "@/lib/constants";
import Dropdown from "./Dropdown";
export default function Avatar({
    user,
  }:AvatarProps) {
    const avatarProps:{
        src?: string;
        name?: string;
    } = {};
  
    if (user && user.avatar) {
      avatarProps.src = `${process.env.NEXT_PUBLIC_HOST}/${user.avatar}`;
    } else if (!user.avatar && (user.first_name && user.last_name)) {
      const initials = getInitialsFromName(`${user.first_name} ${user.last_name}`);
      avatarProps.name = initials;
    }
    
    const config = [
        {
            key: 'profile',
            label: 'Profile',
            href: '/dashboard/profile'
        },{
            key: 'logout',
            label: 'Logout',
            href: '/auth/logout'
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