import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const Container = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

const Hero = styled.img`
    min-height: 18rem;
    max-height: 36rem;
    width: 100%;
`;

const HomeHeader = () => {
    return (
        <Container>
            <Hero src={heroImg}></Hero>
        </Container>
    );
};

export default HomeHeader;
