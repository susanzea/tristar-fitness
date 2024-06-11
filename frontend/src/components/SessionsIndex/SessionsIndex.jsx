/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getWorkoutSessions } from "../../utils/apiWorkoutSession";
import Card from "../Shared Components/Card";

const SessionsIndex = ({ weekStart }) => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    const sessions = await getWorkoutSessions({
      week: weekStart.toISOString().split("T")[0],
    });

    console.log(sessions.workout_sessions);
    setSessions(sessions.workout_sessions);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  debugger;
  return (
    <Card>
      <div className='sessions-index-container'>
        {sessions.map((s, i) => {
          debugger;
          return <Row key={i} session={s} />;
        })}
      </div>
    </Card>
  );
};

const Row = ({ session }) => {
  return <div>{session.workout_date.toLocaleString()}</div>;
};

export default SessionsIndex;
