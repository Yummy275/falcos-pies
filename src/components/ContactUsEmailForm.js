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
    font-size: 0.75rem;

    :focus {
        outline: 1px solid #545454;
    }
`;

const Msg = styled.textarea`
    font-size: 0.75rem;
    width: 88%;
    padding: 0.5rem;
    height: 8rem;
    resize: vertical;
    font-family: 'Playfair Display';

    :focus {
        outline: 1px solid #545454;
    }
`;

const ContactUsEmailForm = () => {
    return (
        <Container>
            <InputsHolder>
                <StdInput placeholder="Name"></StdInput>
                <StdInput placeholder="Email"></StdInput>
                <Msg placeholder="Message"></Msg>
                <StdBtn>Send</StdBtn>
            </InputsHolder>
        </Container>
    );
};

export default ContactUsEmailForm;
