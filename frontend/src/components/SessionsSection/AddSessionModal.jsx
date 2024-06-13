import Modal from "../Shared Components/Modal";
import Form from "./Form";
import Card from "../Shared Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddSessionModal = ({ isModalOpen, setIsModalOpen, workoutTypeOptions, fetchSessions }) => {
  return (
    <Modal
      id={"add-session-modal"}
      open={isModalOpen}
      handleClose={() => setIsModalOpen(false)}>
      <Card>
        <div id='add-session-form'>
          <button id='close-modal-btn' onClick={() => setIsModalOpen(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#ffffff", height: "30px" }}
            />
          </button>
          <Form
            workoutTypeOptions={workoutTypeOptions}
            fetchSessions={fetchSessions}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </Card>
    </Modal>
  );
};

export default AddSessionModal;
