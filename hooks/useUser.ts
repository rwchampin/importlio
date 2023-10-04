
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default function useUser() {
    const { data: user, isLoading } = useRetrieveUserQuery();
    return {
        user,
        isLoading,
    };
}
