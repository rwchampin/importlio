import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { openModal, closeModal, toggleModal } from '@/redux/features/modal/modalSlice';

interface ModalState {
    isOpen: boolean;
}

 
const useModal = () => {
  const dispatch = useDispatch();
    const { isOpen } = useSelector((state: ModalState) => state);

  const showModal = () => dispatch(openModal());
  const hideModal = () => dispatch(closeModal());
  const toggleModal:any = (bool:boolean) => dispatch(toggleModal(bool));

  return {
    isOpen,
    showModal,
    hideModal,
    toggleModal,
  }
};

export default useModal;