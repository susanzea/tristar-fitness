import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Shared Components/Card";
import "../styles/components/_MetricTile.scss";

const MetricTile = ({ variant, metric = "none", description = "no descr" }) => {
  return (
    <Card className='tile'>
      <div className='container'>
        <div className='icon'>
          {" "}
          <FontAwesomeIcon
            icon={variant === "sessions" ? faPersonRunning : faStopwatch}
            style={{ color: "#ffffff", height: "50px", width: "50px" }}
          />
        </div>
        <div className='text'>
          <div className='metric'>{metric}</div>
          <p className='description'>{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default MetricTile;
