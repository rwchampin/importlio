
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

import { useAppSelector } from "@/redux/hooks";
export default async function useProfile() {
    const { access }:any = useAppSelector(state => state.auth);
    const { data: user } = useRetrieveUserQuery();
    return user;
}
