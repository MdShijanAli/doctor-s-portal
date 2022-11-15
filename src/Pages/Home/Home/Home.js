import React from 'react';
import CardSection from '../CardSection/CardSection';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import ContactSection from './ContactSection/ContactSection';
import DentalBanner from './DentalBanner/DentalBanner';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardSection></CardSection>
            <Services></Services>
            <DentalBanner></DentalBanner>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;