import TristarIcon from "../../assets/tristar-icon.svg";
import WeekNavigator from "./WeekNavigator";
import "../../styles/components/Navbar/_Navbar.scss";

const Navbar = ({ weekStart }) => {
  return (
    <div id='navbar'>
      <div className='logo'>
        <img id='logo' src={TristarIcon} />
        <div id='title'>Tristar Fitness</div>
      </div>
      <WeekNavigator weekStart={weekStart}/>
    </div>
  );
};

export default Navbar;
