import Modal from "@mui/material/Modal";
import "../../styles/components/SessionsIndex/AddSessionModal.scss";

const AddSessionModal = ({ id = null, open, handleClose, children }) => {
  return (
    <Modal
      id={id}
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      {children}
    </Modal>
  );
};

export default AddSessionModal;
