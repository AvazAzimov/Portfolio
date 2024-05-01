import React from 'react'
import Header from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { Portfolio } from '../components/Portfolio/Portfolio'
import { Footer } from '../components/Footer/Footer'

export const Publik = () => {
    return (
        <>
            <Header />
            <Hero />
            <About/>
            <Portfolio/>
            <Footer/>
        </>
    )
}
