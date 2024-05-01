import React from 'react';
import styled, { keyframes } from 'styled-components';

const rainy = keyframes`
   0% {
     transform: translateY(0) scale(1); 
    }
    50% {
     transform: translateY(200px) scale(1); 
    }
    100% {
     transform: translateY(300px) scale(0); 
    }
`;

export const StyledPortfolio = styled.section`
  padding: 50px 20px 200px;
  background-color: #353641;
  /* background-image: url("/src/assets/cloudbblsk.jpeg");
background-repeat: no-repeat;
background-position: center;
background-size: cover; */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0 20px;
  box-sizing: border-box;
`;
export const StyledWrapper = styled.div`
  
`;

export const StyledCloud = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;
  @media (max-width: 470px) {
    width: 320px;
  }
  @media (max-width: 420px) {
    width: 220px;
  }
`;

export const StyledRainy = styled.div`
  position: relative;
  top: calc(20% - 90px);
  width: 320px;
  height: 100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 100px;

  @media (max-width: 470px) {
    width: 275px;
    height: 100px;
  }
  @media (max-width: 420px) {
    width: 240px;
  }
  &::before {
    position: absolute;
    top: -50px;
    left: 40px;
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 90px 0 0 30px #fff;
    content: "";
    @media (max-width: 470px) {
    top: -25px;
    left: 30px;
    width: 90px;
    height: 85px;
  }
  @media (max-width: 420px) {
    top: -8px;
    left: 13px;
    width: 80px;
    height: 63px;
  }
  }
`;

export const StyledFinder = styled.div`
  position: relative;
  display: flex;
  padding: 0 20px;
  z-index: 2;
`;
export const StyledPortfolioTitle = styled.h3`
  position: relative;
  top: calc(50% - 20px);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 40px;
  color:  #353641;
  text-align: center;
  z-index: 2;
  @media (max-width: 470px) {
    margin-top: 10px;
    font-size: 20px;

   }
`;

export const RainyDrops = styled.span`
  position: relative;
  left: 60px;
  bottom: 10px;
  width: 15px;
  height: 15px;
  background-image: url("/src/assets/snow.svg");
  background-repeat: no-repeat;
  background-size: 15px;
  margin: 0 2px;
  border-radius: 50%;
  animation: ${rainy} 5s linear infinite;
  animation-duration: ${props => `calc(35s / ${props.i})`}; 
  transform-origin: bottom;
  box-shadow: -4px -8px 83px 12px rgba(255,255,255,1);
   @media (max-width: 470px) {
    left:80px;
    width: 10px;
    height: 10px;
    background-size: 8px;
   }
   @media (max-width: 420px) {
    left:20px;
   }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding-left: 0;
  list-style: none;
`
export const StyledItem = styled.li`
 width: 300px;
 padding: 10px;
 border-radius: 10px;
 background-color: #e3e3e3;
 box-shadow: 10px 17px 43px 0px rgba(0,0,0,0.75);
`
export const StyledImg = styled.img`
  width: 280px;
  border-radius: 10px;
  margin-bottom: 10px;
  border-radius: 2px solid #353641;

`
export const StyledContentBox = styled.div`
  display: flex; 
  justify-content: center;
  gap: 40px;
 
`
export const StyledContentLink = styled.a`
   font-size: 50px;
   color: #353641;

`

