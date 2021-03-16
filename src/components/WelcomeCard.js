import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 1rem;
    margin-bottom: 2rem;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        max-height: 14rem;
        max-width: 60rem;
        ${(props) => (props.reversedFlex ? 'flex-direction: row-reverse;' : '')}
    }
`;

const CardImg = styled.img`
    width: 100%;

    @media (min-width: 1024px) {
        width: 45%;
        margin: 0 1rem;
    }
`;

const WordsHolder = styled.div`
    @media (min-width: 1024px) {
        padding: 1rem;
        width: 45%;
    }
`;

const SecTitle = styled.h3`
    font-weight: 100;
    margin: 0.75rem 0;
`;

const Words = styled.p`
    color: #636363;
`;

const WelcomeCard = ({ image, title, words, reversedFlex }) => {
    return (
        <Container reversedFlex={reversedFlex}>
            <CardImg src={image}></CardImg>
            <WordsHolder>
                <SecTitle>{title}</SecTitle>
                <Words>{words}</Words>
            </WordsHolder>
        </Container>
    );
};

export default WelcomeCard;
