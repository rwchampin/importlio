import useModal from '@/hooks/useModal';
import {Button} from "@nextui-org/react";

const ModalHeader = ({ children }) => (
  <div className="modal-header">
    <h5 className="modal-title">{children}</h5>
  </div>
);

const ModalBody = ({ children }) => (
  <div className="modal-body">{children}</div>
);

const ModalFooter = ({ children }) => (
  <div className="modal-footer">{children}</div>
);
function Modal({
  children,
  isOpen,
  content
}) {

  const { onOpen, onOpenChange } = useModal();

  return ( <div>dfsf</div> )
  // return (
  //   <>
  //     <Button onPress={onOpen}>Open Modal</Button>
  //     <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  //       <ModalContent>
  //         {(onClose) => (
  //           <>
  //            <ModalHeader />
  //             <ModalBody>
  //             <ModalFooter />
  //           </>
  //         )}
  //       </ModalContent>
  //     </Modal>
  //   </>
  // );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;