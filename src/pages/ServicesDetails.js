import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ServicesState } from "../servicesState";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ServicesDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [photographyTypes /*setPhotographyTypes*/] = useState(ServicesState);
  const [photographyType, setPhotographyType] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentPhotographyType = photographyTypes.filter(
      (statePhotographyType) => statePhotographyType.url === url
    );
    setPhotographyType(currentPhotographyType[0]);
  }, [photographyTypes, url]);

  return (
    <>
      {photographyType && ( // Vérifie si l'information du type de photographie (venant de servicesState.js) a été reçu. Si oui, on fait le rendu des components suivants.
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{photographyType.title}</h2>
            <img src={photographyType.mainImg} alt="Type de photographie" />
          </Headline>
          <Details>
            {photographyType.details.map((detail) => (
              <Detail
                title={detail.title}
                description={detail.description}
                key={detail.title}
              />
            ))}
          </Details>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)``;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Details = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1000px) {
    display: block;
    margin: 2.5rem 2.5rem;
  }
`;

const DetailsStyle = styled.div`
  padding: 5rem;
  .line {
    width: 100%;
    background: #3f7d6e;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

// Detail Component
const Detail = ({ title, description }) => {
  return (
    <DetailsStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </DetailsStyle>
  );
};

export default ServicesDetails;
