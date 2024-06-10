// import IconButton from "../Shared Components/IconButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { getWeekday, formatDate } from "../../utils";
import "../../styles/components/Navbar/_WeekNavigator.scss";

const WeekNavigator = ({ weekStart }) => {
  const formattedWeekStartDate = formatDate(weekStart);
  debugger;
  const weekEnd = getWeekday(6, weekStart)
  console.log(`weekEnd: ${weekEnd}`);
  const formattedWeekEndDate = formatDate(weekEnd);
  console.log(`formattedWeekEndDate: ${formattedWeekEndDate}`);
  
  debugger;

  return (
    <div id='week-navigator'>
      <button className='icon-button'>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#ffffff" }} />
      </button>
      &nbsp;{formattedWeekStartDate} - {formattedWeekEndDate}&nbsp;
      <button className='icon-button'>
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default WeekNavigator;
