import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { getWeekday, formatDate, addOrSubWeek } from "../../utils";
import "../../styles/components/Navbar/_WeekNavigator.scss";

const WeekNavigator = ({ weekStart, setWeekStart }) => {
  const formattedWeekStartDate = formatDate(weekStart);
  const weekEnd = getWeekday(6, weekStart);
  const formattedWeekEndDate = formatDate(weekEnd);

  const handleClick = (op) => {
    setWeekStart(addOrSubWeek(weekStart, op));
  };

  return (
    <div id='week-navigator'>
      <button className='icon-button' onClick={() => handleClick("-")}>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#ffffff" }} />
      </button>
      &nbsp;{formattedWeekStartDate} - {formattedWeekEndDate}&nbsp;
      <button className='icon-button' onClick={() => handleClick("+")}>
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default WeekNavigator;
