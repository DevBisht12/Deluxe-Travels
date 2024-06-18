

import './TestimonialCard.css'import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const TestimonialCard = ({ name, shortName, color, message, rating }) => {
  // Function to calculate contrast ratio
  const getContrastRatio = (hexcolor) => {
    // Convert hex color to RGB
    const hex = hexcolor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // Check if luminance is greater than 0.5
    return luminance > 0.5 ? 'black' : 'white';
  };

  // Calculate text color based on contrast ratio
  const textColor = getContrastRatio(color);

  return (
    <div className="testimonialCard">
      <Avatar sx={{ backgroundColor: color, color: textColor }}>{shortName}</Avatar>
      <h4>{name}</h4>
      <Rating name="read-only" value={rating} readOnly />
      <p>{message}</p>
    </div>
  );
};

export default TestimonialCard;
