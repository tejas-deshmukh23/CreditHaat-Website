// RatingStar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ 
 }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-icon" />);
  }
  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
};

export default RatingStar;
