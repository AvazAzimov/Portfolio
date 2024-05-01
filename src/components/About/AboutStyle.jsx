import styled from "styled-components";

export const StyledAbout = styled.section`
background-color: #e3e3e3;
/* background-image: url("/src/assets/cloudzzz.png");
background-repeat: no-repeat;
background-position: center;
background-size: cover; */
padding: 100px 30px 100px ;
@media (max-width: 420px) {
  padding: 100px 30px 50px ;
  }

`;
export const StyledAboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0 20px;
  box-sizing: border-box;
`;
export const StyledAboutWrapper = styled.div`

`;


export const StyledAboutTitle = styled.h2`
text-align: center;
  margin-top: 0;
  margin-bottom: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 35px;
  color: #353641;
 @media (max-width: 768px) {
  margin-bottom: 50px;
  font-weight: 800;
  font-size: 28px;
  }

  @media (max-width: 460px) {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;
export const Cards = styled.div`

`
export const StyledAboutInfoList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-left: 0;
    margin-bottom: 30px;
    list-style: none;
    flex-wrap: wrap;
    gap: 30px;

    
    @media (max-width: 420px) {
      width: 230px;
  }
  
`;

export const StyledAboutFrontItem = styled.li`
    width: 300px;
    height: 300px;
    padding: 40px;
    border: 1px solid  #353641;
    background: rgb(53,54,65);
    background: linear-gradient(255deg, rgba(53,54,65,1) 8%, rgba(53,54,65,1) 62%, rgba(153,153,153,1) 100%);
    border-radius: 20px;
    box-shadow: 18px 4px 38px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    @media (max-width: 420px) {
      width: 230px;
      height: 230px;
      padding: 15px;
  }
    @media (max-width: 320px) {
      width: 180px;
      height: 180px;
      padding: 30px;
  }

`;
export const StyledAboutBackItem = styled.li`
    width: 300px;
    height: 300px;
    padding: 50px;
    border: 1px solid #132142;
    border-radius: 20px;
    background: rgb(53,54,65);
    background: linear-gradient(255deg, rgba(53,54,65,1) 8%, rgba(53,54,65,1) 62%, rgba(153,153,153,1) 100%);
    color: #000;
    box-shadow: 18px 4px 38px 0px rgba(0,0,0,0.75);
    cursor: grabbing;
    @media (max-width: 420px) {
      width: 230px;
      height: 230px;
      padding: 15px;
  }
    @media (max-width: 320px) {
      width: 180px;
      height: 180px;
      padding: 10px;
  }
`;
export const StyledImg = styled.img`
  width: 220px;
  height: 220px;
  color:  #353641;
  margin: 0;
  @media (max-width: 420px) {
      width: 200px;
      height: 200px;
  }
  @media (max-width: 320px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledInfoText = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #fff;
  margin: 0;
  @media (max-width: 420px) {
    font-weight: 700;
    font-size: 18px;
  }
  @media (max-width: 320px) {
    font-weight: 500;
    font-size: 16px;
  }
`;
export const StyledEducation = styled.div`
  padding: 40px;
  background-color: #e3e3e3;
  border: 1px solid #353641;
  border-radius: 20px;
  box-shadow: 18px 4px 38px 0px rgba(0,0,0,0.75);

`

export const StyledEducationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1109px) {
  flex-direction: column;
  }
`
export const StyledEducationTitle = styled.h2`
font-size: 30px;
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #353641;
  `
export const StyledEducationCard = styled.div`

`
export const StyledEducationText = styled.p`
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 font-size: 20px;
 color: #353641;
 text-align: center;
 margin-top: 0;
 @media (max-width: 655px) {
   flex-direction: column;
   font-size: 16px;
  }
`
export const StyledEducationLocation = styled.strong`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 25px;
  @media (max-width: 655px) {
   flex-direction: column;
   font-size: 16px;
  }
  @media (max-width: 420px) {
   flex-direction: column;
  }
`