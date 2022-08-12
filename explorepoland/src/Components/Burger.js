import React, { useState } from "react";
import styled from "styled-components";
import NavMobile from "./NavMobile";

const StyledBurger = styled.div`
  display: none;

  @media (max-width: 1128px) {
    width: 2rem;
    height: 2rem;
    position: fixed !important;
    top: 25px;
    right: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column !important;
    z-index: 20;

    div {
      display: flex;
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "#ccc" : "#333")};
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
      }
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavMobile open={open} />
    </>
  );
};

export default Burger;
