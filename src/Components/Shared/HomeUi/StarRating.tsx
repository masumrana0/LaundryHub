import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  stars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  const filledStars = Array.from({ length: stars }, (index) => (
    <FaStar key={index} color="#ffc107" />
  ));
  const emptyStars = Array.from({ length: 5 - stars }, (index) => (
    <FaRegStar key={index} color="#ffc107" />
  ));

  return (
    <div className="flex justify-center items-center my-3">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
