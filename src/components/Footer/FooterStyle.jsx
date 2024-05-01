import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 50px 0;
  background-color: #c2c2c2;
`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StyledFooterWrapper = styled.div`

`;
export const StyledFooterTop = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px dashed #353641;
  @media (max-width: 700px) {
  margin-bottom: 30px;
}


`;
export const StyledFooterButtom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
  flex-direction: column;
}
  @media (max-width: 420px) {

}
`;
export const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
  margin-bottom: 30px;
}
  @media (max-width: 420px) {

}
`;
export const StyledFooterTitle = styled.h3`
   margin-top: 0;
   margin-bottom: 10px;
   font-family: cursive;
   font-size: 30px;
   color: #353641;



`;
export const StyledFooterLocation = styled.p`
 margin: 0 0 10px;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size: 20px;
 color: #353641;
 @media (max-width: 700px) {
    font-size: 18px;
}
`;
export const StyledFooterEmail = styled.a`
 margin-bottom: 10px;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size: 20px;
 text-decoration: none;
 color: #353641;
 @media (max-width: 700px) {
    font-size: 18px;
}
`;
export const StyledFooterTel = styled.a`
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size: 20px;
 text-decoration: none;
 color: #353641;
 @media (max-width: 700px) {
    font-size: 18px;
}
`;
