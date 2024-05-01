import React from 'react'
import { Container, StyledHeader, StyledLogoImg, StyledWrapper } from './HeaderStyle'

const Header = () => {
    return (
        <StyledHeader>
        
            <Container>
                <StyledWrapper>
                    <StyledLogoImg src={"/src/assets/logosait.svg"}/>
                </StyledWrapper>
            </Container>
        </StyledHeader>


    )
}
export default Header