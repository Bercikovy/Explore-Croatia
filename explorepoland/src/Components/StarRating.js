import React, { useState } from "react";
import "../Stylesheets/StarRating.scss";
import { FaStar } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="ratingWrapper">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size="30"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Ocena 4.2 głosów: 20</p>
      <div className="monument">
        <FaLandmark size="40" />{" "}
        <span>Lista Światowego Dziedzictwa Kulturowego UNESCO</span>
      </div>
    </div>
  );
}

export default StarRating;
