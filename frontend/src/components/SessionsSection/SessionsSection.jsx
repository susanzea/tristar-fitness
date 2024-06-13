import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../Shared Components/Card";
import SessionsIndex from "./SessionsIndex";
import AddSessionModal from "./AddSessionModal";
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
      <AddSessionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        workoutTypeOptions={workoutTypeOptions}
        fetchSessions={fetchSessions}
      />
      <Card className={"sessions-section"} style={{ position: "relative" }}>
        <button
          className='add-session-btn'
          onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "#ffffff", height: "50%" }}
          />
          <span>&nbsp;&nbsp;Add workout</span>
        </button>
        <SessionsIndex
          workoutTypes={workoutTypes}
          workoutSessionsData={workoutSessionsData}
        />
      </Card>
    </>
  );
};

export default SessionsSection;
