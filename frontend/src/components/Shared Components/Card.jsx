import "../../styles/components/Shared Components/_Card.scss";

const Card = ({ id = null, className = null, children, style }) => {
  return (
    <div
      id={id}
      className={`${className} card border-radius`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
