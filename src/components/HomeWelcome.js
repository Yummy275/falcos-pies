import React from 'react';
import styled from 'styled-components';
import TextWithDivider from './TextWithDivider';
import WelcomeCard from './WelcomeCard';
import GrayBar from './GrayBar';
import OnlineOrderAd from './OnlineOrderAd';
import cardOneImg from '../images/home-card-one.jpg';
import cardTwoImg from '../images/home-card-two.jpg';

const Container = styled.div`
    margin-top: 1rem;
`;

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
`;

const HomeWelcome = () => {
    return (
        <Container>
            <TextWithDivider word="Welcome"></TextWithDivider>
            <CardHolder>
                <WelcomeCard
                    image={cardOneImg}
                    title="Dine with Family"
                    words="When you dine with us, you dine with family. The recipes that we share with you have been passed down to us, and we are excited to be able to share them with you. Our ingredients are fresh and healthy, just like we would choose in our own home. Welcome! Make yourself at home!"
                    reversedFlex={true}
                ></WelcomeCard>
                <WelcomeCard
                    image={cardTwoImg}
                    title="Special Events"
                    words="Our staff works to make every visit special, but some events call for just a little more sparkle. Do you have a special event coming up? Contact us and let us know. From private celebration rooms to special menus, we've got you covered."
                    reversedFlex={false}
                ></WelcomeCard>
            </CardHolder>
            <GrayBar>
                <OnlineOrderAd words="Hungry? Order for pickup or delivery."></OnlineOrderAd>
            </GrayBar>
        </Container>
    );
};

export default HomeWelcome;
