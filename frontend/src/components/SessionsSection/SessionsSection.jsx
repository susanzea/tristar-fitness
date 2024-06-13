import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "../Shared Components/Card";
import Modal from "../Shared Components/Modal";
import Form from "./Form";
import SessionsIndex from "./SessionsIndex";
import "../../styles/components/SessionsSection/_SessionsSection.scss";

const SessionsSection = ({
  workoutTypes,
  workoutTypeOptions,
  fetchSessions,
  workoutSessionsData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
      <SessionsIndex
        workoutTypes={workoutTypes}
        workoutSessionsData={workoutSessionsData}
      />
    </>
  );
};

export default SessionsSection;
