import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Shared Components/Card";
import "../styles/components/_MetricTile.scss";

const MetricTile = ({ metric='none', description='no descr' }) => {
  return (
    <Card className='tile'>
      <div className='container'>
        <div className='icon'>
          {" "}
          <FontAwesomeIcon
            icon={faPlus}
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
