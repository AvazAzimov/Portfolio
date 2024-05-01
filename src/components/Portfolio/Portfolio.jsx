import React from 'react'
import { Container, StyledCloud, StyledFinder, StyledPortfolio, StyledRainy, RainyDrops, StyledWrapper, StyledList, StyledItem, StyledImg, StyledContentBox, StyledContentLink, StyledPortfolioTitle } from './PortfolioStyled'
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <StyledWrapper>
                    <StyledCloud>
                        <StyledRainy>
                        <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
                        </StyledRainy>
                        <StyledFinder>
                            <RainyDrops i={15}></RainyDrops>
                            <RainyDrops i={18}></RainyDrops>
                            <RainyDrops i={21}></RainyDrops>
                            <RainyDrops i={12}></RainyDrops>
                            <RainyDrops i={22}></RainyDrops>
                            <RainyDrops i={17}></RainyDrops>
                            <RainyDrops i={10}></RainyDrops>
                            <RainyDrops i={16}></RainyDrops>
                            <RainyDrops i={19}></RainyDrops>
                            <RainyDrops i={11}></RainyDrops>
                            <RainyDrops i={13}></RainyDrops>
                            <RainyDrops i={20}></RainyDrops>
                            <RainyDrops i={13}></RainyDrops>
                        </StyledFinder>
                    </StyledCloud>
                    <StyledList>
                        <StyledItem>
                            <StyledImg src={"/src/assets/Nomozvaqtlari.png"} alt='Nomoz vaqtlari page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/Nomoz_vaqtlari' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://meek-banoffee-071930.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                        <StyledItem>
                            <StyledImg src={"/src/assets/Book.png"} alt='Library page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/library' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://celebrated-bavarois-f3d33f.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                        <StyledItem>
                            <StyledImg src={"/src/assets/Netlify.png"} alt='Netlify page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/Netflix-02' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://inspiring-elf-13e390.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                        <StyledItem>
                            <StyledImg src={"/src/assets/Pokimon.png"} alt='Pokimon page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/Pokimons' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://splendid-zuccutto-16841e.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                        <StyledItem>
                            <StyledImg src={"/src/assets/logeout.png"} alt='Pokimon page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/3-oy-imtihoni' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://fluffy-otter-05c851.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                        <StyledItem>
                            <StyledImg src={"/src/assets/coffee.png"} alt='Pokimon page' />
                            <StyledContentBox>
                                <StyledContentLink href='https://github.com/AvazAzimov/coffeeroasters' target="_blank">
                                    <FaGithub />
                                </StyledContentLink>
                                <StyledContentLink href='https://comforting-empanada-aaf30d.netlify.app' target="_blank">
                                    <FaChrome />
                                </StyledContentLink>
                            </StyledContentBox>
                        </StyledItem>
                    </StyledList>
                </StyledWrapper>
            </Container>
        </StyledPortfolio>
    )
}
