import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeWelcome from '../components/HomeWelcome';
import HomeGallery from '../components/HomeGallery';
import HomeSocial from '../components/HomeSocial';
import GrayBar from '../components/GrayBar';

const HomePage = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <HomeWelcome></HomeWelcome>
            <HomeGallery></HomeGallery>
            <HomeSocial></HomeSocial>
            <GrayBar>
                <div style={{ padding: '3rem', textAlign: 'center' }}>
                    Mock site made by Humberto Gonzalez.
                </div>
            </GrayBar>
        </>
    );
};

export default HomePage;
