import { useAppDispatch } from '@/redux/hooks';
import { setColorMode } from '@/redux/slices/ui';

export default function useUi() {
    const dispatch = useAppDispatch();

    const setUiState = (uiState) => {
        dispatch(setColorMode(uiState));
    };
    
    return { setUiState };
    }