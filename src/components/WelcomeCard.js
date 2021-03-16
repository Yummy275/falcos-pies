import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 1rem;
    margin-bottom: 2rem;
`;

const CardImg = styled.img`
    width: 100%;
`;

const WordsHolder = styled.div``;

const SecTitle = styled.h3`
    font-weight: 100;
    margin: 0.75rem 0;
`;

const Words = styled.p``;

const WelcomeCard = ({ image, title, words }) => {
    return (
        <Container>
            <CardImg src={image}></CardImg>
            <WordsHolder>
                <SecTitle>{title}</SecTitle>
                <Words>{words}</Words>
            </WordsHolder>
        </Container>
    );
};

export default WelcomeCard;
