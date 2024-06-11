/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getWorkoutSessions } from "../../utils/apiWorkoutSession";
import { formatDate, convertMinsToHours } from "../../utils/helpers";
import Card from "../Shared Components/Card";

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
    <Card>
      <div className='sessions-index-container'>
        {sessions.map((s, i) => {
          return <Row key={i} session={s} workoutTypes={workoutTypes} />;
        })}
      </div>
    </Card>
  );
};

const Row = ({ session, workoutTypes }) => {
  debugger;

  return (
    <div className='session-row'>
      <div>{formatDate(new Date(session.workout_date))}</div>
      <div className='workout-type'>
        {workoutTypes.filter((t) => t.id == session.workout_type_id)[0]?.name}
      </div>
      <div>{convertMinsToHours(session.duration_min)}</div>
    </div>
  );
};

export default SessionsIndex;
