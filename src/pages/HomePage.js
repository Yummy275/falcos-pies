import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeWelcome from '../components/HomeWelcome';
import HomeGallery from '../components/HomeGallery';
import HomeSocial from '../components/HomeSocial';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <HomeWelcome></HomeWelcome>
            <HomeGallery></HomeGallery>
            <HomeSocial></HomeSocial>
            <Footer></Footer>
        </>
    );
};

export default HomePage;
