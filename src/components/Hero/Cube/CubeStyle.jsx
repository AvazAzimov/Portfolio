import styled, { keyframes } from 'styled-components';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const rotateCube = keyframes`
  0% { transform: rotateX(-45deg) rotateY(15deg);}
  100% { transform: rotateX(360deg) rotateY(360deg)}
`;
export const BoxShadow = styled.div`

`;

export const Cubes = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateCube} 15s linear infinite;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 460px) {
    width: 100px;
    height: 100px;
  }
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  color: #fff;
  border: 1px solid #000;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 460px) {
    width: 100px;
    height: 100px;
  }
`;

export const FrontFace = styled(CubeFace)`
  transform: translateZ(100px);
  @media (max-width: 768px) {
    transform: translateZ(75px);
  }
  @media (max-width: 460px) {
    transform: translateZ(50px);
  }
`;

export const BackFace = styled(CubeFace)`
  transform: translateZ(-100px);
  @media (max-width: 768px) {
    transform: translateZ(-75px);
  }
  @media (max-width: 460px) {
    transform: translateZ(-50px);
  }
`;

export const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
  @media (max-width: 768px) {
    transform: rotateY(90deg) translateZ(75px);
  }
  @media (max-width: 460px) {
    transform: rotateY(90deg) translateZ(50px);
  }
`;

export const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
  @media (max-width: 768px) {
    transform: rotateY(-90deg) translateZ(75px);
  }
  @media (max-width: 460px) {
    transform: rotateY(-90deg) translateZ(50px);
  }
`;

export const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
  @media (max-width: 768px) {
    transform: rotateX(90deg) translateZ(75px);
  }
  @media (max-width: 460px) {
    transform: rotateX(90deg) translateZ(50px);
  }
`;

export const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
  @media (max-width: 768px) {
    transform: rotateX(-90deg) translateZ(75px);
  }
  @media (max-width: 460px) {
    transform: rotateX(-90deg) translateZ(50px);
  }
`;
// Incons StyledH //

export const StyledHtml5Icon = styled(TiHtml5)`
    color: #fff;
    font-size: 200px;
    padding: 10px;
    box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
    @media (max-width: 768px) {
        font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;

export const StyledCss3Icon = styled(IoLogoCss3)`
   font-size: 200px;
   padding: 10px;
   color: #fff;
   box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
   @media (max-width: 768px) {
    font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;

export const StyledJavascriptIcon = styled(SiJavascript)`
    font-size: 200px;
    padding: 10px;
    color: #fff;
    box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
    @media (max-width: 768px) {
        font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;

export const StyledReactIcon = styled(FaReact)`
    font-size: 200px;
    padding: 10px;
    color: #fff;
    box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
    @media (max-width: 768px) {
        font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;

export const StyledBootstrapIcon = styled(FaBootstrap)`
   font-size: 200px;
   padding: 10px;
   color: #fff;
   box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
   @media (max-width: 768px) {
    font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;

export const StyledTailwindIcon = styled(SiTailwindcss)`
   font-size: 200px;
   padding: 10px;
   box-shadow: inset 10px 10px 135px 7px rgba(0,0,0,0.98);
   color: #fff;
   @media (max-width: 768px) {
    font-size: 150px;
  }
  @media (max-width: 460px) {
        font-size: 100px;
  }
`;
