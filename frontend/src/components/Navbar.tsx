import TristarIcon from "../assets/tristar-icon.svg";
import "../styles/components/_Navbar.scss";

const Navbar = () => {
  return (
    <div id='navbar'>
      <img id='logo' src={TristarIcon} />
      <div id='title'>Tristar Fitness</div>
    </div>
  );
};

export default Navbar;
