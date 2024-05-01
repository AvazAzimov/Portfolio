import React from 'react';

import { BackFace, BottomFace, BoxShadow, Cubes, FrontFace, LeftFace, RightFace, StyledBootstrapIcon, StyledCss3Icon, StyledHtml5Icon, StyledJavascriptIcon, StyledReactIcon, StyledTailwindIcon, TopFace } from "./CubeStyle";

const Cube3D = () => {
  return (
   <BoxShadow>
    <Cubes className=''>
      <FrontFace color="#fff"><StyledHtml5Icon/></FrontFace>
      <BackFace color="#00ff00"><StyledCss3Icon/></BackFace>
      <RightFace color="#0000ff"><StyledJavascriptIcon/></RightFace>
      <LeftFace color="#ffff00"><StyledReactIcon/></LeftFace>
      <TopFace color="#ff00ff"><StyledBootstrapIcon/></TopFace>
      <BottomFace color="#00ffff"><StyledTailwindIcon/></BottomFace>
    </Cubes>
    </BoxShadow>

  );
};

export default Cube3D;
