import React from "react";
import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";

// React Router (for NavLine)
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/">FINEST FILM</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <NavLine
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></NavLine>
        </li>
        <li>
          <Link to="/services">Services</Link>
          <NavLine
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/services" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></NavLine>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <NavLine
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></NavLine>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #f2f4f7;
  a {
    text-decoration: none;
    color: #011627;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    position: relative;
    padding-left: 2rem;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 1rem;
    }
  }
`;

const NavLine = styled(motion.div)`
  position: absolute;
  bottom: -25%;
  left: 42.5%;
  height: 0.1rem;
  background: #011627;
`;

export default Nav;
