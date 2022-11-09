import React from "react";
// Importer les icônes
import urbain from "../img/urbain.svg";
import portrait from "../img/portrait.svg";
import paysage from "../img/paysage.svg";
import objet from "../img/objet.svg";

// Images
import film2 from "../img/film2.jpg";

// Styles
import { About, Description, Image } from "../styles";

// Styled Components
import styled from "styled-components";

// Animations
import { scrollReveal } from "../animation";

// Scroll Animations
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  console.log(element);
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Un appareil argentique, <span>des services de qualité.</span>
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={urbain} alt="Icône Urbain" />
              <h4 className="red">Urbain</h4>
            </Icon>
            <p>Photographie d'édifices et d'architecture.</p>
          </Card>
          <Card>
            <Icon>
              <img src={portrait} alt="Icône Portrait" />
              <h4 className="blue">Portrait</h4>
            </Icon>
            <p>Posage et photographie de personnes.</p>
          </Card>
          <Card>
            <Icon>
              <img src={paysage} alt="Icône Paysage" />
              <h4 className="blue">Paysage</h4>
            </Icon>
            <p>Photographie d'endroits naturels.</p>
          </Card>
          <Card>
            <Icon>
              <img src={objet} alt="Icône Objet" />
              <h4 className="red">Objet</h4>
            </Icon>
            <p>Photographie de sujets matériaux.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={film2} alt="Caméra" />
      </Image>
    </Services>
  );
};

export const Services = styled(About)`
  text-align: left;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 75%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1000px) {
    justify-content: center;
    padding: 2.5rem 5rem;
    p {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 10rem;
  padding-right: 1rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 72px;
    height: 72px;
  }
  h4 {
    margin-left: 0.5rem;
    padding: 1rem;
  }
`;

export default ServicesSection;
