import React from "react";
import "../Stylesheets/Atraction.scss";
import StarRating from "./StarRating";
import { FaMapMarkedAlt } from "react-icons/fa";
import "../Stylesheets/hover.css";
<script async src="//jsfiddle.net/yz4r8jzc/embed/"></script>;

function Atraction() {
  return (
    <div className="attractionWrapper hvr-grow-rotate">
      <div className="photoWrapper">
        <span className="iconWrapper">
          <a href="https://goo.gl/maps/kM4y6ng975qgbr8m9" target="_blank">
            <FaMapMarkedAlt size="50" />
            <p>Sprawdź jak dojechać</p>
          </a>
        </span>
      </div>

      <div className="content  ">
        <p>
          <a href="/">
            <span className="redColor">Dubrovnik</span>{" "}
            <span>miasto pełne niezwykłych zabytków</span>
          </a>
        </p>
        <StarRating />
      </div>
    </div>
  );
}

export default Atraction;
