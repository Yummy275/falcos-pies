import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const Container = styled.div`
    padding-top: 0.5rem;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 100;
`;

const Hero = styled.img`
    min-height: 18rem;
    max-height: 36rem;
    width: 100%;
    margin-top: 1.5rem;
`;

const HomeHeader = () => {
    return (
        <Container>
            <Title>Falcos' Pizza Pies</Title>
            <Hero src={heroImg}></Hero>
        </Container>
    );
};

export default HomeHeader;
