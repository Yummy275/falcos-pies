import React from 'react';
import styled from 'styled-components';
import OnlineOrderAd from '../components/OnlineOrderAd';
import TextWithDivider from '../components/TextWithDivider';
import GrayBar from '../components/GrayBar';
import ContactUsEmailForm from '../components/ContactUsEmailForm';

const Container = styled.div``;

const ContactPage = () => {
    return (
        <Container>
            <OnlineOrderAd words="Order for curbside pickup or delivery."></OnlineOrderAd>
            <TextWithDivider word="Get in touch!"></TextWithDivider>
            <GrayBar>
                <ContactUsEmailForm></ContactUsEmailForm>
            </GrayBar>
        </Container>
    );
};

export default ContactPage;
