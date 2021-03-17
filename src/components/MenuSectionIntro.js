import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2rem;
`;

const SecTitle = styled.h2`
    color: #636363;
`;

const SecDetails = styled.p`
    font-size: 0.75rem;
    margin-top: 0.25rem;
`;

const MenuSectionIntro = ({ title, body }) => {
    return (
        <Container>
            <SecTitle>{title}</SecTitle>
            <SecDetails>{body}</SecDetails>
        </Container>
    );
};

export default MenuSectionIntro;
