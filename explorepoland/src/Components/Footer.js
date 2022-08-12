import React from "react";
import "../Stylesheets/Footer.scss";
import "../Stylesheets/Classes.scss";
import Form from "./Form";

export default function Footer() {
  return (
    <>
      <section className="footerWrapper parallax">
        <Form />
        <ul>
          <li className="copyright">
            @ 2022 Explore Poland Wszelkie prawa zastrzeżone{" "}
          </li>
          <li>
            <a href="wp.pl">Strona Główna</a>
          </li>
          <li>
            <a href="wp.pl">Odkrywaj</a>
          </li>
          <li>
            <a href="wp.pl">Kontakt</a>
          </li>
        </ul>
        <div className="footerBackground"></div>  
      </section>
    </>
  );
}
