import React from 'react';
import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: 4px 49px 74px -11px rgba(162,0,255,0.76);
  border-bottom: 1px solid transparent;
  background-color: #353641;
  padding: 15px 0;

`;


export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0 20px;
  box-sizing: border-box; 
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const StyledWrapper = styled.div`
`;

export const StyledLogoImg = styled.img`
   width: 60px;
   /* height: 80px; */
`;
