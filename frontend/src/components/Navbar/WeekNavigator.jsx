// import IconButton from "../Shared Components/IconButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Navbar/_WeekNavigator.scss'

const WeekNavigator = () => {
  const getWeekday = (weekdayIdx, d = new Date()) => {
    d = new Date(d);
    const day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : weekdayIdx); // adjust when day is sunday

    return new Date(d.setDate(diff));
  };

  const SundayDateString = getWeekday(0)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  const SaturdayDateString = getWeekday(6)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  return (
    <div id='week-navigator'>
      <button className='icon-button'>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#ffffff" }} />
      </button>
      &nbsp;{SundayDateString} - {SaturdayDateString}&nbsp;
      <button className='icon-button'>
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default WeekNavigator;
