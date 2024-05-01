import styled, { keyframes } from 'styled-components';

export const rotateText = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledHero = styled.section`
position: relative;
background-color:#353641;
padding: 150px 30px 215px ;
@media (max-width: 768px) {
  padding: 90px 30px 130px ;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0 20px;
  box-sizing: border-box;
`;
export const StyledWrapper = styled.div`
   display: flex;
   justify-content:space-around;
   align-items: center;


   @media (max-width: 768px) {
    flex-direction: column;
    gap: 90px;
  }

  @media (max-width: 480px) {

  }
   
`;
export const StyledInfoBox = styled.div`
   width: 300px;
   @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 460px) {
    width: 250px;
  }
`;
export const StyledTitle = styled.h1`
margin-top: 0;
font-family: Arial, Helvetica, sans-serif;
font-weight: 900;
font-size: 30px;
color: #fff;
 animation: ${rotateText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

 @media (max-width: 768px) {
  text-align: center;
  font-weight: 800;
  font-size: 28px;
  }

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;
export const StyledNameTitle = styled.strong`
 margin-top: 0;
 font-family: cursive;
 font-weight: 900;
 font-size: 30px;
 color: #fff;
 text-decoration: underline #fff;
 animation: ${rotateText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

 @media (max-width: 768px) {
  text-align: center;
  font-weight: 800;
  font-size: 28px;
  }

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

export const StyledText = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #e0e0e0;
  animation: ${rotateText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
   @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
export const StyledInfoText = styled.span`
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #fff;
  text-decoration: underline #fff;
  animation: ${rotateText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
   @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }

`;
export const StyledBgFigure = styled.span`
 position: absolute;
 top: calc(50% - 312px);
 right: calc(50% - 180px);
 width: 900px;
 height: 600px;
 background-image:url("/src/assets/Bggg.svg");
 background-size: 900px 600px;
 background-repeat: no-repeat;
 @media (max-width: 768px) {
  width: 500px;
  height: 500px;
  top: calc(50% - 176px);
  right: calc(50% - 105px);
  background-size: 500px 500px;
  }
  @media (max-width: 650px) {
  width: 500px;
  height: 500px;
  top: calc(50% - 176px);
  right: calc(50% - 170px);
  background-size: 500px 500px;
  }
 @media (max-width: 540px) {
  width: 500px;
  height: 400px;
  top: calc(50% - 76px);
  right: calc(50% - 225px);
  background-size: 500px 400px;
  }
  @media (max-width: 460px) {
  width:400px;
  height: 340px;
  top: calc(50% - 73px);
  right: calc(50% - 170px);
  background-size: 400px 340px;
  }
 @media (max-width: 420px) {
  width: 400px;
  height: 400px;
  top: calc(50% - 135px);
  right: calc(50% - 185px);
  background-size: 400px 400px;
  }
  @media (max-width: 380px) {
  width: 300px;
  height: 350px;
  top: calc(50% - 85px);
  right: calc(50% - 106px);
  background-size: 300px 350px;
  }
 @media (max-width: 320px) {
  width: 200px;
  height: 300px;
  top: calc(50% - 35px);
  right: calc(50% - 40px);
  background-size: 200px 300px;
  }
`;