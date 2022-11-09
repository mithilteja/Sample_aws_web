// Styled Components
import styled from "styled-components";

// Framer Motion
import { motion } from "framer-motion";

// Home
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 5rem 25rem;
  color: #011627;
  @media (max-width: 1000px) {
    display: block;
    padding: 2.5em 2.5rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: 700;
  }
  img {
    width: 200;
    height: 200;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

// Services + Contact Headers
export const HeaderSection = styled.div`
  min-height: 90vh;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  padding: 5rem 10rem;
  h1 {
    font-size: 10rem;
    color: #fcfdff;
  }
  p {
    color: #fcfdff;
    padding-right: 20rem;
  }
  @media (max-width: 1000px) {
    padding: 5rem 2.5rem;
    p {
      padding-right: 0rem;
    }
  }
`;
