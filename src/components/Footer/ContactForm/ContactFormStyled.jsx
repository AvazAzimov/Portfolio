import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
 
`;
export const StyledInputName = styled.input`
 width: 300px;
 padding: 10px;
 border-radius: 10px;
 outline: none;
 border: 1px solid transparent;
 @media (max-width: 700px) {
  width: 250px;
}
`;
export const StyledInputEmail = styled.input`
 width: 300px;
 padding: 10px;
 border-radius: 10px;
 outline: none;
 border: 1px solid transparent;
 @media (max-width: 700px) {
  width: 250px;
}
`;
export const StyledContent = styled.textarea`
 width: 300px;
 height: 100px;
 padding: 10px;
 border-radius: 10px;
 outline: none;
 border: 1px solid transparent;
 resize: none;
 @media (max-width: 700px) {
  width: 250px;
}
`;
export const StyledButton = styled.button`
 width: 80px;
 margin-left: auto;
 padding: 10px;
 border-radius: 10px;
 outline: none;
 border: 1px solid transparent;
`;