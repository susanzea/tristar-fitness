import "../../styles/components/Shared Components/_Card.scss";

const Card = ({ children }) => {
  return <div className='card border-radius'>{children}</div>;
};

export default Card;
