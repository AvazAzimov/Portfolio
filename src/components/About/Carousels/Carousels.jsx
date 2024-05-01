import React from 'react';
import { StyledCarousel, StyledItem, StyledList } from './CarouselsStyle';
import { IoLogoHtml5 } from 'react-icons/io5';
import { FaSass } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IoLogoFigma } from "react-icons/io5";
export const Carousels = () => {
  // Array of icon components
  const icons = [
    <IoLogoHtml5 />,
    <FaSass />,
    <IoLogoCss3 />,
    <FaBootstrap />,
    <FaReact />,
    <IoLogoJavascript />,
    <SiTailwindcss />,
    <FaGithub />,
    <IoLogoFigma/>,
    <IoLogoHtml5 />,
    <FaSass />,
    <IoLogoCss3 />,
    <FaBootstrap />,
    <FaReact />,
    <IoLogoJavascript />,
    <SiTailwindcss />,
    <FaGithub />,
    <IoLogoFigma/>,
  ];

  return (
    <div>
      <StyledCarousel>
        <StyledList>
          {icons.map((icon, index) => (
            <StyledItem key={index}>{icon}</StyledItem>
          ))}
        </StyledList>
      </StyledCarousel>
    </div>
  );
};
