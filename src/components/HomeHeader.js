import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.75rem;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const Hero = styled.img`
    min-height: 22rem;
    max-height: 28rem;
    width: 100%;
    filter: brightness(0.75);
`;

const WordsHolder = styled.div`
    position: absolute;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: 100;
    text-align: center;

    @media (min-width: 768px) {
        width: 16rem;
        margin-left: 4rem;
        padding-left: 1rem;
        text-align: unset;
        align-items: flex-start;
        border-left: 1px solid white;
    }
`;

const MainWords = styled.h2`
    font-weight: 100;
`;

const Divider = styled.div`
    height: 1px;
    width: 120%;
    margin: 0.5rem 0;
    color: white;
    background-color: white;

    @media (min-width: 768px) {
        display: none;
    }
`;

const SubWords = styled.h3`
    font-weight: 100;
    @media (min-width: 768px) {
        margin: 1rem 0;
    }
`;

const Btn = styled.button`
    width: 6rem;
    height: 2rem;
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 1rem;
`;

const HomeHeader = () => {
    return (
        <Container>
            <Hero src={heroImg}></Hero>
            <WordsHolder>
                <MainWords>
                    Brick oven pizza with a much-talked about crust.
                </MainWords>
                <Divider></Divider>
                <SubWords>Authentic Italian with a modern twist.</SubWords>
                <Btn>Order Now</Btn>
            </WordsHolder>
        </Container>
    );
};

export default HomeHeader;
