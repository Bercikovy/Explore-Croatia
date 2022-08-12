import React from "react";
import "../Stylesheets/Posts.scss";
import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";
import "../Stylesheets/Mixins.scss";
import"../Stylesheets/Buttons.css";
import { MdArrowForward } from "react-icons/md";
import Atraction from "./Atraction";

export default function Posts() {
  return (
    <section className="postsWrapper parallax" id="Posts">
      <div className="postsBorder"></div>
      <div className="postsContent">
        <h2>Oto Propozycja Kilku Atrakcji</h2>
        <p>
          Wybranie zestawu najpiękniejszych miejsc w Chorwacji to bardzo trudne
          zadanie. Chorwacja i Dalmacja oferuje tyle wspaniałych zakątków, że nie sposób
          zmieścić je w takiej skondensowanej formie. Nie traktujcie więc tego
          zestawienia zbyt poważnie. Na pewno wiele miejsc w nim brakuje. Nie
          gniewajcie się. To tylko subiektywna propozycja punktów do
          odwiedzenia. Więcej, o wiele więcej odkryjecie już na własną rękę, do
          czego gorąco zachęcamy, bo Chorwacja jest piękna!
        </p>
      </div>
      <div className="newestPosts">
      {[...Array(4)].map(atraction =>{
        return(
        <div className="atractionWrapper">
        <Atraction/>
        </div>

        );


      })}
      
      </div>
      <div className="seeMore">
        <button className="custom-btn btn-5"><span>ZOBACZ WIĘCEJ</span></button>
        <MdArrowForward fontSize={"20px"} color={"rgb(48,108,178)"} />{" "}
      </div>
    </section>
  );
}
