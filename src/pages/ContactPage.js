import React from 'react';
import styled from 'styled-components';
import OnlineOrderAd from '../components/OnlineOrderAd';
import TextWithDivider from '../components/TextWithDivider';
import GrayBar from '../components/GrayBar';
import ContactUsEmailForm from '../components/ContactUsEmailForm';
import ContactLocationAndHours from '../components/ContactLocationAndHours';
import Footer from '../components/Footer';

const Container = styled.div``;

const ContactPage = () => {
    return (
        <Container>
            <OnlineOrderAd words="Order for curbside pickup or delivery."></OnlineOrderAd>
            <TextWithDivider word="Get in touch!"></TextWithDivider>
            <GrayBar>
                <ContactUsEmailForm></ContactUsEmailForm>
            </GrayBar>
            <ContactLocationAndHours></ContactLocationAndHours>
            <Footer></Footer>
        </Container>
    );
};

export default ContactPage;
