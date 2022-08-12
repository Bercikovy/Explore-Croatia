import React from "react";
import styled from "styled-components";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const Nav = styled.nav`
    width: 100%;
    border-bottom: 2px solid white;
    padding: 0;
    height: auto
    display: none ;
    justify-content: space-between;
    align-items:center;

    button {
      @include flexCenter;
      font-size: 1rem;
      margin:5px;
      color: white;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid white;
      background-color: transparent;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      svg {
        margin-right: 10px;
      }
    }
    
    button:hover {
      background-color: #212529;
      color: white;
    }

    .loginSearch{
      display:flex;
      justify-content:center;
    }

   .logo {

   display:flex;
   justify-content:center;
   align-items:center;

   h1{
    font-family: 'Nuosu SIL', serif;
    margin-left:20px;
   }
}
.iconSearch{
    margin: 0 20px 25px 20px;
    display:flex;
    justify-content:center;

    h1{
       color: white; 
    }

    li{
      margin-left:20px;
    }
    

   
}

ul{
    
    list-style-type:none;
    margin:0;
    padding:0;


@media (max-width: 1128px){
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")}
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
}

@media (min-width: 1128px){
   display:none;
}

    li{
        padding-top:20px;
        text-align:center;
    
    
    a{
        color:white;
        text-decoration:none;
    }
}
}

   `;

function NavMobile({ open }) {
  return (
    <Nav open={open}>
      <ul>
        <li className="logo">
          <img
            src="https://freesvg.org/img/1631694690croatia-flag-patriotic-symbol.png"
            alt=""
          />
          <h1>Explore Croatia</h1>
        </li>
        <li>
          <a href="/">STRONA GŁÓWNA</a>
        </li>
        <li>
          <a href="#Explore">ODKRYWAJ</a>
        </li>
        <li>
          <a href="#Contact">MIASTA</a>
        </li>
        <li>
          <a href="#Contact">NOCLEGI</a>
        </li>
        <li>
          <a href="#Contact">MAPA</a>
        </li>
        <li>
          <a href="#Contact">WSPÓŁPRACA</a>
        </li>
        <li>
          <a href="#Contact">KONTAKT</a>
        </li>
        <li className="iconSearch">
          <li>
            <a href="wp.pl">
              <ImFacebook2 color="#4267B2" fontSize="35px" />
            </a>
          </li>
          <li>
            <a href="wp.pl">
              <FaInstagramSquare color="#C13584" fontSize="35px" />
            </a>
          </li>
          <li>
            <a href="wp.pl">
              <FaTwitterSquare color="#1DA1F2" fontSize="35px" />
            </a>
          </li>
          <li>
            <a href="wp.pl">
              <FaWhatsappSquare color="#25D366" fontSize="35px" />
            </a>
          </li>
          </li>
          <div className="loginSearch">
        <li><button><MdLogin size="20px" />
            Zaloguj się
          </button></li>
        <li><button className="search">
            <MdSearch size="20px" />
            Szukaj
          </button></li>
        </div>
        
          
      </ul>
            
    </Nav>
  );
}

export default NavMobile;
