import React from "react";

import "../Stylesheets/Header.scss";

import "./Fonts/Fonts.scss";
import "../Stylesheets/Classes.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import Burger from "./Burger";
import MainNavigation from "./MainNavigation";

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
      <MainNavigation/>

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
