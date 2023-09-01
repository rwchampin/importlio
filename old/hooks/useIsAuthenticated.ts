
import { useAppSelector } from '@/old/utils/redux/hooks';


interface State {
    auth: {
        isAuthenticated: boolean;
    }
}
export default function useIsAuthenticated() {
    const isAuthenticated = useAppSelector((state:State) => state.auth.isAuthenticated);

    return {
        isAuthenticated,
    };
 
}