import React from "react";
import "../Stylesheets/Header.scss";
import { MdShareLocation } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";

export default function Header() {
  return (
    <section className="headerWrapper parallax">
      <nav className="mainNavigation">
        <ul>
          <li>
            <a href="">STRONA GŁÓWNA</a>
          </li>
          <li>
            <a href="">ODKRYWAJ</a>
          </li>
          <li id="iconLocalization">
            <MdShareLocation fontSize={"60px"} />
          </li>
          <li>
            <a href="">KONTAKT</a>
          </li>
          <li id="iconSearch">
            <MdSearch />
            <span>Szukaj</span>
          </li>
        </ul>
      </nav>

      <div className="contentWrapper">
        <h1>ODKRYJ ATRAKCJE W POLSCE</h1>
        <p>Polska jest piękna!</p>
      </div>
    </section>
  );
}
