"use client";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import {
    openModal,
    toggleModal,
    closeModal,
} from "@/redux/features/modal/modalSlice";

export default function useModal() {
    const { modalOpen } = useAppSelector((state: any) => state.modal);
    const dispatch = useAppDispatch();

    const open = () => dispatch(openModal());
    const close = () => dispatch(closeModal());
    const toggle = () => dispatch(toggleModal());

    return {
        isOpen: modalOpen,
        open,
        close,
        toggle,
    };
}