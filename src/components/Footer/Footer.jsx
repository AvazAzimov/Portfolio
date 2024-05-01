import React from 'react'
import { Container, StyledFooter, StyledFooterButtom, StyledFooterEmail, StyledFooterInfo, StyledFooterLocation, StyledFooterTel, StyledFooterTitle, StyledFooterTop, StyledFooterWrapper } from './FooterStyle'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { ContactForm } from './ContactForm/ContactForm';

export const Footer = () => {
    return (
        <>

            <StyledFooter>
                <Container>
                    <StyledFooterWrapper>
                        <StyledFooterTop>
                            <StyledFooterTitle>Hello</StyledFooterTitle>
                        </StyledFooterTop>
                        <StyledFooterButtom>
                            <StyledFooterInfo>
                                <StyledFooterLocation>
                                    <IoLocationSharp style={{marginRight:"10px"}}/>
                                    Uzbekistan , Tashkent
                                </StyledFooterLocation>
                                <StyledFooterEmail href="mailto:avazazimov2004@gmail.com">
                                    <MdOutlineEmail style={{marginRight:"10px"}} />
                                    avazazimov2004@gmail.com
                                </StyledFooterEmail>
                                <StyledFooterTel href='tel:+998901670323'>
                                    <FaPhoneVolume style={{marginRight:"10px"}}/>
                                    +99890-167-03-23
                                </StyledFooterTel>
                            </StyledFooterInfo>
                            <ContactForm />
                        </StyledFooterButtom>
                    </StyledFooterWrapper>
                </Container>
            </StyledFooter>
        </>
    )
}
