
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useAppSelector } from '@/redux/hooks';
export default function useAuth() {
    const { isAuthenticated } = useAppSelector(state => state.auth);
    const { data: user, isLoading } = useRetrieveUserQuery();

    if(isAuthenticated) {
        return {
            user
        }
    }
    return false;
}
