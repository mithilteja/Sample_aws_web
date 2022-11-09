import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 2100 1045"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1969.56 981.063C1794.51 698.459 1348.97 178.962 967.214 361.796C585.46 544.63 174.456 501.349 16.6733 456.853"
        stroke="#F71735"
        stroke-opacity="0.2"
        stroke-width="20"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M1960.53 1039.06C1785.48 756.46 1339.94 236.962 958.189 419.796C576.436 602.631 165.432 559.349 7.64897 514.853"
        stroke="#2D3FFF"
        stroke-opacity="0.2"
        stroke-width="20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M1978.58 926.156C1803.53 643.553 1357.99 124.055 976.238 306.889C594.484 489.724 183.48 446.442 25.6976 401.947"
        stroke="#3F7D6E"
        stroke-opacity="0.2"
        stroke-width="20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;

export default Wave;
