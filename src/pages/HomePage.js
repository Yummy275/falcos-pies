import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeWelcome from '../components/HomeWelcome';
import HomeGallery from '../components/HomeGallery';

const HomePage = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <HomeWelcome></HomeWelcome>
            <HomeGallery></HomeGallery>
        </>
    );
};

export default HomePage;
