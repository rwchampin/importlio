import { useAppDispatch } from '@/redux/hooks';
import { setColorMode } from '@/redux/features/uiSlice';

export default function useUI() {
    const dispatch = useAppDispatch();
    
    const setUiState = (uiState) => {
        dispatch(setColorMode(uiState));
    };
    
    return { setUiState };
    }