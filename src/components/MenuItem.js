import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2.5rem;
`;

const MainDetailsHolder = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Name = styled.h3`
    font-weight: 100;
    margin-bottom: 0.25rem;
`;

const Price = styled.h3`
    font-weight: 100;
    margin-bottom: 0.25rem;
`;

const Details = styled.p`
    font-size: 0.75rem;
`;

const MenuItem = ({ name, price, details }) => {
    return (
        <Container>
            <MainDetailsHolder>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </MainDetailsHolder>
            <Details>{details}</Details>
        </Container>
    );
};

export default MenuItem;
