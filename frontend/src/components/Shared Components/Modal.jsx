import { Modal as MuiModal } from "@mui/material";
import "../../styles/components/Shared Components/Modal.scss";

const Modal = ({ id = null, open, handleClose, children }) => {
  return (
    <MuiModal
      id={id}
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      {children}
    </MuiModal>
  );
};

export default Modal;
