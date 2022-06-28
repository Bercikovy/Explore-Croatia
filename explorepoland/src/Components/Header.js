import React from "react";
import "../Stylesheets/Header.scss";
import { MdShareLocation } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

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
      <div className="flexWrapper">
        <div className="socialMedia">
          
          <span>
            <a href="">
              <ImFacebook2 color="#4267B2" fontSize="45px" />
            </a>
            <p>Facebook</p>
          </span>
          <span>
            <a href="">
              <FaTwitterSquare color="#1DA1F2" fontSize="45px" />
            </a>
            <p>Twitter</p>
          </span>
          <span>
            <a href="">
              <FaInstagramSquare color="#C13584" fontSize="45px" />
            </a>
            <p>Instagram</p>
          </span>
          <span>
            <a href="">
              <AiFillGoogleSquare color="#DB4437" fontSize="45px" />
            </a>
            <p>Google</p>
          </span>
          <span>
            <a href="">
              <FaWhatsappSquare color="#25D366" fontSize="45px" />
            </a>
            <p>WhatsUp</p>
          </span>
        </div>

        <div className="contentWrapper">
          <h1>ODKRYJ ATRAKCJE W POLSCE</h1>
          <p>Polska jest piękna!</p>
        </div>
      </div>
    </section>
  );
}
