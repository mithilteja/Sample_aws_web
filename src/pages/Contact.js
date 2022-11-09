import React from "react";

// Components
import ContactHeader from "../components/ContactHeader";

// Images
import film from "../img/film.jpg";

// Styling
import { About, Description, Image } from "../styles";

// Styled Ccomponents
import styled from "styled-components";

// Animations
import { motion } from "framer-motion";
import { pageAnimation, scrollReveal } from "../animation";

// Scroll Animations
import { useScroll } from "../components/useScroll";

const Contact = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactHeader />
      <StyledContact
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <Description>
          <h2>Contactez-nous.</h2>
          <div>
            <Social>
              <Circle />
              <h4>ENVOYEZ-NOUS UN EMAIL</h4>
            </Social>
            <p>hello@finestfilm.com</p>
            <Social>
              <Circle />
              <h4>TÉLÉPHONEZ-NOUS</h4>
            </Social>
            <p>(123)-500-8888</p>
            <Social>
              <Circle />
              <h4>VISITEZ NOS RÉSEAUX SOCIAUX</h4>
            </Social>
            <p>
              <a href="https://www.facebook.com/">Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com/">Instagram</a>
            </p>
            <p>
              <a href="https://www.pinterest.ca/">Pinterest</a>
            </p>
          </div>
        </Description>
        <Image>
          <img src={film} alt="Caméra" />
        </Image>
      </StyledContact>
    </motion.div>
  );
};

export const StyledContact = styled(About)`
  text-align: left;
  padding: 5rem 10rem;
  @media (max-width: 1000px) {
    padding: 5rem 2.5rem;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 50%;
    padding: 0rem;
  }
  a {
    color: #011627;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #011627;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin: 2rem;
  }
`;

export default Contact;
