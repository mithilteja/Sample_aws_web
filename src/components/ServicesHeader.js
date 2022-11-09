import React from "react";

// Styled
import styled from "styled-components";

// Styles
import { HeaderSection, Hide } from "../styles";

// Animations
import { motion } from "framer-motion";
import { titleAnim } from "../animation";

const ServicesHeader = () => {
  return (
    <ServicesHeaderSection>
      <Hide>
        <motion.h1 variants={titleAnim}>Services.</motion.h1>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim}>
          Nos services touchent aux quatres types de photographie que nous
          pratiquons: la photographie urbaine, de paysage, de portrait et
          d'objet.
        </motion.p>
      </Hide>
    </ServicesHeaderSection>
  );
};

const ServicesHeaderSection = styled(HeaderSection)`
  background: #f71735;
`;

export default ServicesHeader;
