import "../../styles/components/Shared Components/_Card.scss";

const Card = ({ children, style }) => {
  return (
    <div style={style} className='card border-radius'>
      {children}
    </div>
  );
};

export default Card;
