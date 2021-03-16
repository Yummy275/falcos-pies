import React from 'react';
import styled from 'styled-components';
import TextWithDivider from './TextWithDivider';

const Container = styled.div`
    margin-top: 1rem;
`;

const HomeGallery = () => {
    return (
        <Container>
            <TextWithDivider word="#Falco's Best"></TextWithDivider>
        </Container>
    );
};

export default HomeGallery;
