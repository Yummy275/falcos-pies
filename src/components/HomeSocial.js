import React from 'react';
import styled from 'styled-components';
import TextWithDivider from './TextWithDivider';
import iconOne from '../images/yelp-icon.png';
import iconTwo from '../images/pintrest-icon.png';
import iconThr from '../images/facebook-icon.png';
import iconFour from '../images/twitter-icon.png';
import iconFive from '../images/insta-icon.png';

const Container = styled.div``;

const IconHolder = styled.div`
    width: 100%;
    max-width: 24rem;
    display: flex;
    justify-content: space-evenly;
    margin: 2rem auto;
`;

const Icon = styled.img`
    height: 2rem;
    width: 2rem;
`;

const HomeSocial = () => {
    return (
        <Container>
            <TextWithDivider word="Social"></TextWithDivider>
            <IconHolder>
                <Icon src={iconFive}></Icon>
                <Icon src={iconThr}></Icon>
                <Icon src={iconFour}></Icon>
                <Icon src={iconOne}></Icon>
                <Icon src={iconTwo}></Icon>
            </IconHolder>
        </Container>
    );
};

export default HomeSocial;
