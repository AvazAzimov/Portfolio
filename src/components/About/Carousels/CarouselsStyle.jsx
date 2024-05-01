import styled, { keyframes } from "styled-components";
export const animationLogo = keyframes`
 from {
  transform: translateX(0%);
 }
 to {
    transform: translateX(-100%);
 }
`;
export const StyledCarousel = styled.div`
    padding: 5px 0;
    margin-bottom: 40px;
    overflow: hidden;
`;
export const StyledList = styled.ul`
    display: flex;
    white-space: normal;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
    gap: 100px;
    animation: ${animationLogo} 20s infinite linear ;
    @media (max-width: 420px) {
        gap: 15px;
    }
    @media (max-width: 320px) {
        gap: 10px;
    }
 
`;
export const StyledItem = styled.li`
  color: #353641;
  font-size: 58px;
  @media (max-width: 420px) {
    font-size: 38px
    }
  @media (max-width: 320px) {
    font-size: 28px;
  }
`;
