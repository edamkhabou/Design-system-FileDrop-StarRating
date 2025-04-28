import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange(value); // Notify parent component of the rating change
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            cursor: 'pointer',
            color: index < rating ? 'gold' : 'gray',
            fontSize: '2rem', 
          }}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;