import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    margin-top: 1.5rem;
`;

const Container = styled.div`
    text-align: center;
    width: 90%;
    margin: 1rem auto 0 auto;
`;

const Title = styled.h3`
    font-weight: 100;
    margin-bottom: 0.75rem;
`;

const Info = styled.p``;
const ContactLocationAndHours = () => {
    return (
        <MainContainer>
            <Container>
                <Title>Falco's</Title>
                <Info>555 Nutley Avenue, Blunch Worth, Arizona, 85242</Info>
            </Container>
            <Container>
                <Title>Hours</Title>
                <Info>Monday - Saturday: 11AM - 8PM</Info>
                <Info>Sunday-Closed</Info>
            </Container>
        </MainContainer>
    );
};

export default ContactLocationAndHours;
