import React, { useState } from 'react';
import { Cards, StyledAbout, StyledAboutBackItem, StyledAboutContainer, StyledInfoText, StyledAboutFrontItem, StyledAboutInfoList, StyledAboutTitle, StyledAboutWrapper, StyledImg, StyledEducation, StyledEducationTitle, StyledEducationText, StyledEducationLocation, StyledEducationCard, StyledEducationWrapper } from './AboutStyle';
import { Carousels } from './Carousels/Carousels';
import ReactCardFlip from 'react-card-flip';
import HtmlLogo from "/src/assets/htmllogo.svg"
import CssLogo from "/src/assets/csslogo.svg"
import ReactLogo from "/src/assets/reactlogo.svg"
import JsLogo from "/src/assets/jslogo.svg"
import BootstrapLogo from "/src/assets/bootstraplogo.svg"
import TailwinLogo from "/src/assets/tailwindlogo.svg"
import { HiMiniBuildingLibrary } from "react-icons/hi2";

let imges = {
    HtmlLogo: HtmlLogo,
    CssLogo: CssLogo,
    ReactLogo: ReactLogo,
    JsLogo: JsLogo,
    BootstrapLogo: BootstrapLogo,
    TailwinLogo: TailwinLogo,

}

let infotext = {
    HtmlLogo: 'Use HTML tags in the right places Focus on "SEO, Accessibility...',
    CssLogo: `Using BEM methodology, + "Responsive, Animation`,
    JsLogo: `JavaScript (ES6), Fetch API , Event loop, Objects,RegExp and a complete "CRUD" process.Working with arrays and objects...`,
    ReactLogo: `Styled-components, Hooks, Routes,CRUD operation and Axios`,
    BootstrapLogo: `Grid System,Flexbox and Grid,Responsive design Integration with React, JavaScript frameworks`,
    TailwinLogo: "Grid System,Flexbox and Grid,Responsive design Integration with React, JavaScript frameworks",
    GitHub: "Work as a team",
}

export const About = () => {
    const [cardFlip, setCardFlip] = useState(false);

    function cardFunc() {
        setCardFlip(!cardFlip);
    }

    return (
        <StyledAbout>
            <StyledAboutContainer>
                <StyledAboutWrapper>
                    <StyledAboutTitle>
                        About Me
                    </StyledAboutTitle>
                    <Carousels />
                    <Cards>
                        <StyledAboutInfoList>
                            {Object.keys(imges).map((item, index) => (
                                <ReactCardFlip flipDirection='horizontal' isFlipped={cardFlip} key={index}>
                                    <StyledAboutFrontItem key={index} onClick={cardFunc}>
                                        <StyledImg  src={imges[item]} alt='Logo'/>
                                    </StyledAboutFrontItem>
                                    <StyledAboutBackItem onClick={cardFunc}>
                                        <StyledInfoText>
                                            {infotext[item]}
                                        </StyledInfoText>
                                    </StyledAboutBackItem>
                                </ReactCardFlip>
                            ))}
                        </StyledAboutInfoList>
                    </Cards>
                    <StyledEducation>
                        <StyledEducationTitle>Education</StyledEducationTitle>
                        <StyledEducationWrapper>
                            <StyledEducationCard>
                                <StyledEducationText>
                                    <StyledEducationLocation>
                                        <HiMiniBuildingLibrary style={{color:"#353641", fontSize:" 30px"}}/>
                                        PDP ACADEMY - FOUNDATION - 2022
                                    </StyledEducationLocation>
                                    Basic C++ skills and computer literacy
                                </StyledEducationText>
                            </StyledEducationCard>
                            <StyledEducationCard>
                                <StyledEducationText>
                                    <StyledEducationLocation>
                                        <HiMiniBuildingLibrary style={{color:"#353641", fontSize:" 30px"}}/>
                                        NAJOT TA'LIM - FRONTEND - 2023
                                    </StyledEducationLocation>
                                    HTML , CSS , BOOTSTRAP , JAVASCRIPT 
                                </StyledEducationText>
                            </StyledEducationCard>
                        </StyledEducationWrapper>
                    </StyledEducation>
                </StyledAboutWrapper>
            </StyledAboutContainer>
        </StyledAbout>
    );
};
