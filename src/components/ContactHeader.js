import React from "react";

// Styled
import styled from "styled-components";

import { HeaderSection, Hide } from "../styles";

// Animations
import { motion } from "framer-motion";
import { titleAnim } from "../animation";

const ContactHeader = () => {
  return (
    <ContactHeaderSection>
      <Hide>
        <motion.h1 variants={titleAnim}>Contact.</motion.h1>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim}>
          Que ce soit par e-mail, par appel téléphonique ou par réseaux sociaux,
          nous vous invitons à bras ouverts à entrer en contact avec Finest
          Film.
        </motion.p>
      </Hide>
    </ContactHeaderSection>
  );
};

const ContactHeaderSection = styled(HeaderSection)`
  background: #2d3fff;
`;

export default ContactHeader;
