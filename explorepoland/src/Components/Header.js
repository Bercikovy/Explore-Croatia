import React from "react";
import "../Stylesheets/Header.scss";
import { MdSearch } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import Burger from "./Burger";

export default function Header() {
  return (
    <section className="headerWrapper parallax">
      <div className="logo">
        <img
          src="https://freesvg.org/img/1631694690croatia-flag-patriotic-symbol.png"
          alt=""
        />
        <h1>Explore Croatia</h1>
      </div>
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
            <a href="#Explore">NOCLEGI</a>
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

      <Burger />

      <div className="flexWrapper">
        <div className="socialMedia">
          <span>
            <a href="wp.pl">
              <ImFacebook2 color="#4267B2" fontSize="45px" />
            </a>
            <p>Facebook</p>
          </span>
          <span>
            <a href="wp.pl">
              <FaTwitterSquare color="#1DA1F2" fontSize="45px" />
            </a>
            <p>Twitter</p>
          </span>
          <span>
            <a href="wp.pl">
              <FaInstagramSquare color="#C13584" fontSize="45px" />
            </a>
            <p>Instagram</p>
          </span>
          <span>
            <a href="wp.pl">
              <AiFillGoogleSquare color="#DB4437" fontSize="45px" />
            </a>
            <p>Google</p>
          </span>
          <span>
            <a href="wp.pl">
              <FaWhatsappSquare color="#25D366" fontSize="45px" />
            </a>
            <p>WhatsUp</p>
          </span>
        </div>

        <div className="contentWrapper">
          <h1>EXPLORE CROATIA<br></br>ODKRYJ ATRAKCJE W CHORWACJI</h1>
          <p>Chorwacja jest piękna!</p>
        </div>
      </div>
    </section>
  );
}
