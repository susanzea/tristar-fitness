/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getWorkoutSessions } from "../../utils/apiWorkoutSession";
import { formatDate, convertMinsToHours, getDay } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../Shared Components/Card";
import "../../styles/components/SessionsIndex/_SessionsIndex.scss";

const SessionsIndex = ({ weekStart, workoutTypes }) => {
  const [sessions, setSessions] = useState([]);

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
    <Card style={{ position: "relative" }}>
      <button className='add-session-btn'>
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
