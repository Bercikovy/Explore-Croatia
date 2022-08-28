import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "../Stylesheets/Arrow.scss";

function Arrow() {
  const [backToTopArrow, setBackToTopArrow] = useState(false);

  const handleScroll = (event) => {
    console.log('A key was pressed');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const scroll = () =>{
    
  
   const offset=  window.pageYOffset;
    console.log(offset);

  };




  return (
    <div className="arrowWrapper">
      
      {backToTopArrow && (
        <AiOutlineArrowUp onClick={scroll} size={60} className="scrollTop" />
      )}
    </div>
  );
};
export default Arrow;
