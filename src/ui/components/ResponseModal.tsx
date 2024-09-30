import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { CheckCircle, AlertCircle } from 'react-feather'; // Use icons for success and error

export default function ResponseModal({ type, message, visible, onClose }: ResponseModalProps) {
  const getIcon = () => {
    return type === 'success' ? (
      <CheckCircle color="green" size={48} />
    ) : (
      <AlertCircle color="red" size={48} />
    );
  };

  return (
    <Modal isOpen={visible}  onClose={onClose} className='z-50' closeButton>
        <ModalContent>
            <ModalHeader className='justify-center items-center'>
                {getIcon()}
            </ModalHeader>
            <ModalBody>
                <h4 className='flex justify-center section__title '>{message}</h4>
            </ModalBody>
            <ModalFooter>
                <Button color='default'  onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
        </ModalContent>

    </Modal>
  );
};

