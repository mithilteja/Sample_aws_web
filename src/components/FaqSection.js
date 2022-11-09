import React from "react";

// Import Components
import Toggle from "./Toggle"; // FAQ TOGGLE

// Styles
import { About } from "../styles";

// Styled Components
import styled from "styled-components";

// React Router DOM (for button links)
import { Link } from "react-router-dom";

// Framer Motion
import { AnimateSharedLayout } from "framer-motion";

// Animations
import { scrollReveal } from "../animation";

// Scroll Animations
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Des questions <span>fréquemment posées</span> pour les curieux.
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Pourquoi la photographie argentique plutôt que digital?">
          <div className="reponse">
            <p>
              Chez Finest Film, nous valorisons beaucoup nos clients. Nous
              sommes donc toujours ouverts à de nouvelles demandes de séances
              photographiques. Vous pouvez prendre un rendez-vous en nous
              écrivant par courriel, en nous téléphonant ou en nous envoyant un
              message instantané à nos réseaux sociaux. Nous répondons dans les
              plus brefs délais.
            </p>
          </div>
        </Toggle>
        <Toggle title="Quels sont les frais associés à une séance de photographie?">
          <div className="reponse">
            <p>
              Chez Finest Film, nous valorisons beaucoup nos clients. Nous
              sommes donc toujours ouverts à de nouvelles demandes de séances
              photographiques. Vous pouvez prendre un rendez-vous en nous
              écrivant par courriel, en nous téléphonant ou en nous envoyant un
              message instantané à nos réseaux sociaux. Nous répondons dans les
              plus brefs délais.
            </p>
          </div>
        </Toggle>
        <Toggle title="Comment sont distribuées les photos?">
          <div className="reponse">
            <p>
              Chez Finest Film, nous valorisons beaucoup nos clients. Nous
              sommes donc toujours ouverts à de nouvelles demandes de séances
              photographiques. Vous pouvez prendre un rendez-vous en nous
              écrivant par courriel, en nous téléphonant ou en nous envoyant un
              message instantané à nos réseaux sociaux. Nous répondons dans les
              plus brefs délais.
            </p>
          </div>
        </Toggle>
        <Toggle title="Comment puis-je prendre rendez-vous?">
          <div className="reponse">
            <p>
              Chez Finest Film, nous valorisons beaucoup nos clients. Nous
              sommes donc toujours ouverts à de nouvelles demandes de séances
              photographiques. Vous pouvez prendre un rendez-vous en nous
              écrivant par courriel, en nous téléphonant ou en nous envoyant un
              message instantané à nos réseaux sociaux. Nous répondons dans les
              plus brefs délais.
              <br />
              <br />
              Nos coordonnées se trouvent sur notre page Contact, accessible à
              partir du bouton ci-dessous.
            </p>
            <Link to="/contact">
              <button>Nous contacter</button>
            </Link>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  text-align: left;
  padding: 5rem 10rem;
  @media (max-width: 1000px) {
    padding: 2.5rem 5rem;
  }
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
  .faq-line {
    background: #011627;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
