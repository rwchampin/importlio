
import { useRetrieveUserQuery, useLogoutMutation } from '@/redux/features/authApiSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout as setLogout } from '@/redux/features/authSlice';

export default function useAuth() {
    const dispatch = useAppDispatch();

    const { isAuthenticated, isLoading } = useAppSelector(state => state.auth);
    debugger
    // const { data: user } = useRetrieveUserQuery();
    const [logoutMutation] = useLogoutMutation();

    const getUser = () => {
        return useRetrieveUserQuery();
    }
 

    const logout = () => {
        logoutMutation(undefined)
            .unwrap()
            .then(() => {
                dispatch(setLogout());
            });
    }

    return {
        isAuthenticated,
        isLoading,
        logout,
        getUser
    }
}
