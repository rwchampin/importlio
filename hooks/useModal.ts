import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { openModal, closeModal } from '@/redux/features/modal/modalSlice';

interface ModalState {
    isOpen: boolean;
    content: string | React.ReactNode | null | undefined;
}

 
const useModal = () => {
  const dispatch = useDispatch();
    const { isOpen, content } = useSelector((state: ModalState) => state);
    // const store = useAppSelector((state) => state);

  const openModalWithContent = (content:any) => {
    dispatch(openModal(content));
  };

  const closeCurrentModal = () => {
    dispatch(closeModal());
  };

  return {isOpen, content, openModalWithContent, closeCurrentModal };
};

export default useModal;