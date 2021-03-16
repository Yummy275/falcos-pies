import React from 'react';
import styled from 'styled-components';
import StdButton from './StdBtn';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const Words = styled.h2`
    margin: 0.5rem;
    text-align: center;
    font-weight: 100;
`;

const BlackBtn = styled(StdButton)`
    margin-top: 0;
    color: white;
    background-color: black;
`;

const OnlineOrderAd = ({ words }) => {
    return (
        <Container>
            <Words>{words}</Words>
            <BlackBtn>Order Online</BlackBtn>
        </Container>
    );
};

export default OnlineOrderAd;
