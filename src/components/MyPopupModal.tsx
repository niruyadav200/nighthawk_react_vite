// MyModal.tsx

import { Modal, Button } from "react-bootstrap";
import { ReactNode } from "react";

function MyPopupModal({
  show,
  handleClose,
  title,
  children,
}: {
  show: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPopupModal;
