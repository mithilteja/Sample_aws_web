import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <Footer>
      <p>Copyright 2021 // Tous les droits sont réservés.</p>
      <p>
        Site web par{" "}
        <a href="https://mackinnonmedia.com">Alexander MacKinnon</a>
      </p>
    </Footer>
  );
};

const Footer = styled.div`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  background: #f2f4f7;
  p {
    font-size: 1rem;
  }
  a {
    color: #011627;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FooterSection;
