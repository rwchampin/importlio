
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useAppSelector } from '@/redux/hooks';

export default function useAuth() {
    const { isAuthenticated, isLoading } = useAppSelector(state => state.auth);
    const {
        data: user,
    } = useRetrieveUserQuery(isAuthenticated);

    return {
        isAuthenticated,
        user,
        isLoading,
    };
}
