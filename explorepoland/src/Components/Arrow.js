import React from "react";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "../Stylesheets/Arrow.scss";

const Arrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 0) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScroll);

  console.log(window.pageYOffset);

  return (
    <AiOutlineArrowUp
      onClick={scrollTop}
      size={60}
      className="scrollTop"
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};
export default Arrow;
