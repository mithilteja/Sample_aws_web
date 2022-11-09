import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import ServicesHeader from "../components/ServicesHeader";
import { Hide } from "../styles";

// Images
import urbain1 from "../img/urbain1.jpg";
import portrait1 from "../img/portrait1.png";
import paysage1 from "../img/paysage1.jpg";
import objet1 from "../img/objet1.jpg";

// Animations
import { motion } from "framer-motion";
import { pageAnimation, scrollReveal, lineAnim } from "../animation";

// Scroll Animations
import { useScroll } from "../components/useScroll";

const ServicesPage = () => {
  const [element, controls] = useScroll(); // Section 1
  const [element2, controls2] = useScroll(); // Section 2
  const [element3, controls3] = useScroll(); // Section 3
  const [element4, controls4] = useScroll(); // Section 4
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ServicesHeader />
      <StyledServices>
        <Service
          variants={scrollReveal}
          ref={element}
          animate={controls}
          initial="hidden"
        >
          <motion.h2>Urbain</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/urbain">
            <Hide>
              <motion.img src={urbain1} alt="urbain1" />
            </Hide>
          </Link>
        </Service>
        <Service
          variants={scrollReveal}
          ref={element2}
          animate={controls2}
          initial="hidden"
        >
          <motion.h2>Paysage</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/paysage">
            <img src={paysage1} alt="portrait1" />
          </Link>
        </Service>
        <Service
          variants={scrollReveal}
          ref={element3}
          animate={controls3}
          initial="hidden"
        >
          <motion.h2>Portrait</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/portrait">
            <img src={portrait1} alt="paysage1" />
          </Link>
        </Service>
        <Service
          variants={scrollReveal}
          ref={element4}
          animate={controls4}
          initial="hidden"
        >
          <motion.h2>Objet</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/objet">
            <img src={objet1} alt="Objet" />
          </Link>
        </Service>
      </StyledServices>
    </motion.div>
  );
};

const StyledServices = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1000px) {
    padding: 2.5rem 2.5rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Service = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #011627;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export default ServicesPage;
