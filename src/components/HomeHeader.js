import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
`;

const Hero = styled.img`
    min-height: 22rem;
    max-height: 36rem;
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
`;

const SubWords = styled.h4`
    font-weight: 100;
`;

const Btn = styled.button`
    width: 6rem;
    margin-top: 1.5rem;
    height: 2rem;
    font-weight: bold;
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
