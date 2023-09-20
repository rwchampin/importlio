"use client";
import ProfileForm from "@/components/forms/ProfileForm";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
export default function Page() {
    const [userProfile, setUserProfile] = useState<any>(null);
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setUserProfile(user);
        }
        
    }, [user]);


    if(!userProfile) return (<div>loading...</div>);

    return (
        <ProfileForm
            user={userProfile}
        />
    )
}