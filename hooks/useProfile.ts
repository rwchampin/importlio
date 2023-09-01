
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/authSlice';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default async function useProfile() {
	const dispatch = useAppDispatch();

	const {data: user, isLoading, isFetching} = await useRetrieveUserQuery();

    dispatch(setUser({
        ...user,
    }));

}
