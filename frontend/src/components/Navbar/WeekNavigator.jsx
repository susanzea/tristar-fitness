import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { getWeekday, formatDate, addOrSubWeek } from "../../utils/helpers";
import "../../styles/components/Navbar/_WeekNavigator.scss";

const WeekNavigator = ({ weekStart, setWeekStart }) => {
  const formattedWeekStartDate = formatDate(weekStart);
  const weekEnd = getWeekday(6, weekStart);
  const formattedWeekEndDate = formatDate(weekEnd);

  const navWeek = (op) => {
    setWeekStart(addOrSubWeek(weekStart, op));
  };

  return (
    <div id='week-navigator'>
      <button className='icon-button' onClick={() => navWeek("-")}>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#ffffff" }} />
      </button>
      &nbsp;{formattedWeekStartDate} - {formattedWeekEndDate}&nbsp;
      <button className='icon-button' onClick={() => navWeek("+")}>
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default WeekNavigator;
