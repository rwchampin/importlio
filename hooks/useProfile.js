// hooks/useProfile.ts
import { useDispatch, useSelector } from 'react-redux';
import { useRetrieveUserQuery } from '@/redux/slices/apiSlice'; // Import the existing retrieveUser action

 const useProfile = () => {
    const {retrieveUser} = useRetrieveUserQuery();

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile); // Assuming the profile is stored in state.profile

  const fetchProfile = async () => {
    try {
      await dispatch(retrieveUser()); // Use the existing retrieveUser action to fetch the profile
      debugger
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  return { profile, fetchProfile };
};

export default useProfile;