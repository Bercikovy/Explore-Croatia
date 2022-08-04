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
import Burger from "./Burger";
import TextField from "@mui/material/TextField";

export default function Header() {
  return (
    <section className="headerWrapper parallax">
      <div className="logo">  
        <MdShareLocation fontSize={"60px"} />
          <h1>Explore Poland</h1>
        </div>
      <nav className="mainNavigation">
        <ul>
          <li>
            <a href="/">STRONA GŁÓWNA</a>
          </li>
          <li>
            <a href="#Explore">ODKRYWAJ</a>
          </li>
          <li id="iconLocalization">
            <MdShareLocation fontSize={"60px"} />
          </li>
          <li>
            <a href="#Contact">KONTAKT</a>
          </li>
          <li id="iconSearch">
            <MdSearch />
            <span><TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        /></span>
          </li>
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
          <h1>ODKRYJ ATRAKCJE W POLSCE</h1>
          <p>Polska jest piękna!</p>
        </div>
      </div>
    </section>
  );
}
