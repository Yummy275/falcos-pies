import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';
import StdBtn from './StdBtn';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const Hero = styled.div`
    min-height: 22rem;
    max-height: 28rem;
    width: 100%;
    background-image: url(${heroImg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #00000075;
    background-blend-mode: overlay;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const WordsHolder = styled.div.attrs((props) => ({
    style: {
        transform: `translateY(${props.pos}px)`,
        opacity: `${(100 - props.pos / 4) / 100}`,
    },
}))`
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

const HomeHeader = () => {
    const [pos, setPos] = useState();

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled < 400) {
                setPos(scrolled);
            }
        });
    }, []);

    return (
        <Container>
            <Hero>
                <WordsHolder pos={`${pos}`}>
                    <MainWords>
                        Brick oven pizza with a much-talked about crust.
                    </MainWords>
                    <Divider></Divider>
                    <SubWords>Authentic Italian with a modern twist.</SubWords>
                    <StdBtn>Order Now</StdBtn>
                </WordsHolder>
            </Hero>
        </Container>
    );
};

export default HomeHeader;
