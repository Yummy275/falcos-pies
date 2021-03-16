import React from 'react';
import styled from 'styled-components';
import TextWithDivider from './TextWithDivider';
import imgOne from '../images/gallery-one.jpg';
import imgTwo from '../images/gallery-two.jpg';
import imgThr from '../images/gallery-thr.jpg';
import imgFour from '../images/gallery-four.jpg';
import imgFive from '../images/gallery-five.jpg';
import imgSix from '../images/gallery-six.jpg';

const Container = styled.div`
    margin-top: 1rem;
`;

const Gallery = styled.div`
    width: 100%;
    justify-content: center;
`;

const SmGallery = styled(Gallery)`
    display: flex;
    margin-top: 1.5rem;
    @media (min-width: 1024px) {
        display: none;
    }
`;

const WideGallery = styled(Gallery)`
    display: none;
    max-width: 50rem;
    margin: 1.5rem auto 0 auto;
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const Col = styled.div`
    width: 45%;
    margin: 0 0.25rem;

    @media (min-width: 1024px) {
        width: 30%;
    }
`;

const BaseImg = styled.img`
    width: 100%;
    margin: 0.15rem;
`;

const ShortImg = styled(BaseImg)`
    height: 8rem;
`;
const MedImg = styled(BaseImg)`
    height: 10rem;

    @media (min-width: 1024px) {
        height: 14rem;
    }
`;
const TallImg = styled(BaseImg)`
    height: 12rem;

    @media (min-width: 1024px) {
        height: 18rem;
    }
`;

const HomeGallery = () => {
    return (
        <Container>
            <TextWithDivider word="#Falco's Best"></TextWithDivider>
            <SmGallery>
                <Col>
                    <MedImg src={imgTwo}></MedImg>
                    <TallImg src={imgThr}></TallImg>
                    <MedImg src={imgOne}></MedImg>
                </Col>
                <Col>
                    <ShortImg src={imgFour}></ShortImg>
                    <TallImg src={imgSix}></TallImg>
                    <MedImg src={imgFive}></MedImg>
                </Col>
            </SmGallery>
            <WideGallery>
                <Col>
                    <MedImg src={imgTwo}></MedImg>
                    <MedImg src={imgOne}></MedImg>
                </Col>
                <Col>
                    <ShortImg src={imgFour}></ShortImg>
                    <TallImg src={imgSix}></TallImg>
                </Col>
                <Col>
                    <TallImg src={imgThr}></TallImg>
                    <MedImg src={imgFive}></MedImg>
                </Col>
            </WideGallery>
        </Container>
    );
};

export default HomeGallery;
