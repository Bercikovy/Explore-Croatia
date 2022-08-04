import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { MdShareLocation } from "react-icons/md";
import TextField from "@mui/material/TextField";


const Nav = styled.nav`
    width: 100%;
    border-bottom: 2px solid white;
    padding: 0;
    height: auto
    display: none ;
    justify-content: space-between;
    align-items:center;

    

    
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

    h1{
       color: white; 
    }
    

   
}

ul{
    
    list-style-type:none;
    margin:0;
    padding:0;


@media (max-width: 756px){
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
@media (min-width: 757px){
   display:none;
}

    li{
        padding-top:20px;
        padding-left:0;
    
    
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
          <MdShareLocation fontSize={"60px"} />
          <h1>Explore Poland</h1>
        </li>
        <li>
          <a href="/">STRONA GŁÓWNA</a>
        </li>
        <li>
          <a href="#Explore">ODKRYWAJ</a>
        </li>
        <li>
          <a href="#Contact">KONTAKT</a>
        </li>
        <li className="iconSearch">
          
          <span >
        
            <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        /></span>
        </li>
      </ul>
    </Nav>
  );
}

export default NavMobile;
