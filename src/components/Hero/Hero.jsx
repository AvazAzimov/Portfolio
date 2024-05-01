import React from 'react'
import { Container, StyledHero, StyledInfoBox, StyledNameTitle, StyledText, StyledTitle, StyledWrapper,StyledInfoText, StyledBgFigure} from './HeroStyled'
import Cube3D from './Cube/Cube'



export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <StyledWrapper>
                <StyledBgFigure/>
                  <StyledInfoBox>
                  <StyledTitle>
                    Hi, my name is <StyledNameTitle>Avazbek</StyledNameTitle> , I'm a web developer
                  </StyledTitle>
                  <StyledText>
                  I'm a web developer, I can use <StyledInfoText>Git hub</StyledInfoText> and <StyledInfoText>Figma</StyledInfoText>,
                  I like to use different animations in my field
                  </StyledText>
                  </StyledInfoBox>
                  <Cube3D/>
                </StyledWrapper>
            </Container>
        </StyledHero>
    )
}
