import React from 'react';
import styled from 'styled-components';
import StdBtn from '../components/StdBtn';

const Container = styled.div`
    width: 70%;
    max-width: 30rem;
    margin: 0 auto;
    padding: 2rem;
`;

const InputsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StdInput = styled.input`
    width: 88%;
    padding: 0.5rem;
    font-family: 'Playfair Display';
    margin-bottom: 1rem;
`;

const Msg = styled.textarea`
    width: 88%;
    padding: 0.5rem;
    height: 8rem;
    resize: vertical;
    font-family: 'Playfair Display';
`;

const SendBtn = styled(StdBtn)``;

const ContactUsEmailForm = () => {
    return (
        <Container>
            <InputsHolder>
                <StdInput placeholder="Name"></StdInput>
                <StdInput placeholder="Email"></StdInput>
                <Msg placeholder="Message"></Msg>
                <SendBtn>Send</SendBtn>
            </InputsHolder>
        </Container>
    );
};

export default ContactUsEmailForm;
