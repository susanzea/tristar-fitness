/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../Shared Components/Card";
import SessionsIndex from "./SessionsIndex";
import { formatDate, convertMinsToHours, getDay } from "../../utils/helpers";
import AddSessionModal from "./AddSessionModal";
import "../../styles/components/SessionsSection/_SessionsSection.scss";

const SessionsSection = ({
  weekStart,
  workoutTypes,
  workoutTypeOptions,
  fetchSessions,
  workoutSessions,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("week updated");
  }, [weekStart]);

    useEffect(() => {
      fetchSessions();
    }, [weekStart]);

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
        <div className='sessions-index-container'>
          {workoutSessions.map((s, i) => {
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

export default SessionsSection;
