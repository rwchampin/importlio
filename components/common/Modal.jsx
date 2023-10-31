"use client";

import { useAppSelector } from "@/redux/hooks";
import {
  Modal as MM,
   ModalContent,
     ModalBody,

} from "@nextui-org/react";

import { toggleModal } from "@/redux/features/modal/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
export default function Modal({ children }) {
  const { modalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

   const onOpenChange = (open) => {
    dispatch(toggleModal());
  }

    return (

        <MM 
          isOpen={modalOpen} 
          placement={"center"}
          backdrop="blur"
          onOpenChange={onOpenChange}
          closeOnEsc={true}
          closeOnClickOutside={true}
          size="lg"
        >
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                <ModalBody>
                  {children}
                </ModalBody>
                
              </>
            )}
          </ModalContent>
        </MM>

    );
  }
  
 