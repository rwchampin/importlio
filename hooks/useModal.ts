
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {   toggleModal } from '@/redux/features/modal/modalSlice';
 
 
const useModal = () => {
  const dispatch = useAppDispatch();

  const { isOpen } = useAppSelector(state => state.modal);

  const setModal = () => {
    dispatch(toggleModal());
  }

  return {
    isOpen,
    setModal,
  }
};

export default useModal;