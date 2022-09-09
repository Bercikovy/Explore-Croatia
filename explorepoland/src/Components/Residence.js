import React from "react";
import "../Stylesheets/Residence.scss";

function Residence() {
  return (
    <div className="Wrapper">
      <iframe
        id="hotelwidget"
        title="dupa"
        src="https://hatlastravel.com/widget/hotels?place=barcelona&partner=1"
        style={{
          height: "60vh",
          width: "100%",
          margin: "auto",
          display: "block",
          overflow: "hidden",
          border: "none",
          position: "relative",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Residence;
