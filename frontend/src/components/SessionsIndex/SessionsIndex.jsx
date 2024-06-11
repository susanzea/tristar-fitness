/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getWorkoutSessions } from "../../utils/apiWorkoutSession";
import { formatDate, convertMinsToHours, getDay } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "../Shared Components/Card";
import AddSessionModal from "./AddSessionModal";
import Form from "./Form";
import "../../styles/components/SessionsIndex/_SessionsIndex.scss";

const SessionsIndex = ({ weekStart, workoutTypes }) => {
  const [sessions, setSessions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchSessions = async () => {
    const sessions = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
    });

    setSessions(sessions.workout_sessions);
  };

  useEffect(() => {
    fetchSessions();
  }, [weekStart]);

  return (
    <>
      <AddSessionModal
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
            <Form />
          </div>
        </Card>
      </AddSessionModal>
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
        <div className='sessions-index-container'>
          {sessions.map((s, i) => {
            return <Row key={i} session={s} workoutTypes={workoutTypes} />;
          })}
        </div>
      </Card>
    </>
  );
};

const Row = ({ session, workoutTypes }) => {
  return (
    <div className='session-row'>
      <div className='left'>
        <div className='workout-type'>
          {getDay(new Date(session.workout_date))}{" "}
          {workoutTypes.filter((t) => t.id == session.workout_type_id)[0]?.name}
        </div>
      </div>
      <div className='right'>
        <div>{formatDate(new Date(session.workout_date))}</div>
        <div className='duration'>
          {convertMinsToHours(session.duration_min)}
        </div>
      </div>
    </div>
  );
};

export default SessionsIndex;
