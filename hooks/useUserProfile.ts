
import {   useAppSelector } from '@/redux/hooks';

export default async function useProfile() {
    const { user } = useAppSelector(state => state.auth);
    return user;
}
