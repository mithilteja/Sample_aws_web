import React from "react";

// Styled Components
import styled from "styled-components";

// Wave Component
import Wave from "./Wave";

// Styles
import { About, Hide } from "../styles";

// React Router DOM (for button links)
import { Link } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";
import {
  titleAnim,
  fade,
  pageTransition,
  pageTransitionContainer,
} from "../animation";

const AboutSection = () => {
  return (
    <About>
      <motion.div variants={pageTransitionContainer}>
        <Frame1 variants={pageTransition}></Frame1>
        <Frame2 variants={pageTransition}></Frame2>
        <Frame3 variants={pageTransition}></Frame3>
        <Frame4 variants={pageTransition}></Frame4>
      </motion.div>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Traditionnellement</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>photographié par</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>Finest Film.</motion.h2>
        </Hide>
        <motion.p variants={fade}>
          Bienvenue chez le studio Finest Film, meneur dans photographie
          argentique. Depuis dix ans, nous modernisons cette méthode de
          photographie tout en gardant son style agréablement rétro.
        </motion.p>
        <Link to="/services">
          <motion.button variants={fade}>Voir nos services</motion.button>
        </Link>
        <Link to="/contact">
          <motion.button variants={fade} className="removeLeftBorder">
            Nous contacter
          </motion.button>
        </Link>
      </motion.div>
      <Wave />
    </About>
  );
};

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #3f7d6e;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #2d3fff;
`;

const Frame3 = styled(Frame1)`
  background: #f71735;
`;

const Frame4 = styled(Frame1)`
  background: #011627;
`;

export default AboutSection;
