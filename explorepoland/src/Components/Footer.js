import React from "react";
import "../Stylesheets/Footer.scss";
import "../Stylesheets/Classes.scss";
import Form from "./Form";

export default function Footer() {
  return (
    <section className="footerWrapper parallax"><Form/>
      <ul>
        <li className="copyright">
          @ 2022 Explore Poland Wszelkie prawa zastrzeżone{" "}
        </li>
        <li>
          <a href="">Strona Główna</a>
        </li>
        <li>
          <a href="">Odkrywaj</a>
        </li>
        <li>
          <a href="">Kontakt</a>
        </li>
      </ul>
    </section>
  );
}
