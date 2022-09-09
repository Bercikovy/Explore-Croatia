import React from "react";
import { Link } from "react-router";
import { MdSearch } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import "../Stylesheets/MainNavigation.scss";

function MainNavigation() {
  return (
    <nav className="mainNavigation">
      <ul>
        <li>
          <img
            src="https://freesvg.org/img/1631694690croatia-flag-patriotic-symbol.png"
            alt=""
          />
        </li>

        <li>
          <a href="/">
            <MdHome />
          </a>
        </li>
        <li>
          <a href="#Explore">ODKRYWAJ</a>
        </li>
        <li>
          <a href="#Explore">MIASTA</a>
        </li>
        <li>
          <Link to="/Noclegi">NOCLEGI</Link>
        </li>

        <li>
          <a href="#Contact">KONTAKT</a>
        </li>
        <li>
          <a href="#Map">MAPA</a>
        </li>
        <li>
          <a href="#Cooperation">WSPÓŁPRACA</a>
        </li>
        <button>
          <MdLogin size="20px" />
          Zaloguj się
        </button>
        <button className="search">
          <MdSearch size="20px" />
          Szukaj
        </button>
      </ul>
    </nav>
  );
}

export default MainNavigation;
