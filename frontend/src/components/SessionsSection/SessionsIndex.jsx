import { useEffect } from "react";
import { formatDate, convertMinsToHours, getDay } from "../../utils/helpers";

const SessionsIndex = ({
  weekStart,
  workoutTypes,
  workoutSessions,
}) => {
  useEffect(() => {
    console.log("hi");
  }, [weekStart]);

  return (
    <div className='sessions-index-container'>
      {workoutSessions?.workout_sessions.map((s, i) => {
        return <Row key={i} session={s} workoutTypes={workoutTypes} />;
      })}
    </div>
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
