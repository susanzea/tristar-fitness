import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatDate, convertMinsToHours, getDay } from "../../utils/helpers";
import Card from "../Shared Components/Card";

const SessionsIndex = ({
  workoutTypes,
  workoutSessionsData,
  setIsModalOpen,
}) => {
  return (
    <Card className={"sessions-section"} style={{ position: "relative" }}>
      <button className='add-session-btn' onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#ffffff", height: "50%" }}
        />
        <span>&nbsp;&nbsp;Add workout</span>
      </button>
      <div className='sessions-index-container'>
        {workoutSessionsData?.workout_sessions.map((s, i) => {
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
