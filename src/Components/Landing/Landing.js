import React from 'react';
import Header from '../Global/Header';
import Banner from './Banner';
import Brand from './Brand';
import Sectiondivider from '../Global/Sectiondivider';
import Mint from './Mint';
import FactArea from './FactArea';
import About from './About';
import { Artwork } from './Artwork';
import { Artist } from './Artist';
import { Faq } from './Faq';
import { CtaArea } from './CtaArea';
import { Footer } from '../Global/Footer';

const Landing = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Brand/>
            <Sectiondivider/>
            <Mint/>
            <Sectiondivider/>
            <FactArea/>
            <Sectiondivider/>
            <About/>
            <Sectiondivider/>
            <Artwork/>
            <Sectiondivider/>
            <Artist/>
            <Sectiondivider/>
            <Faq/>
            <Sectiondivider/>
            <CtaArea/>
            <Sectiondivider/>
            <Footer/>
        </>
    );
}

export default Landing;