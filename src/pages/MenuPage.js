import React from 'react';
import styled from 'styled-components';
import TextWithDivider from '../components/TextWithDivider';
import MenuSectionIntro from '../components/MenuSectionIntro';
import MenuItem from '../components/MenuItem';
import MenuSectionContainer from '../components/MenuSection';

const Container = styled.div``;

const MenuPage = () => {
    return (
        <Container>
            <TextWithDivider word="Menu"></TextWithDivider>
            <MenuSectionContainer>
                <MenuSectionIntro
                    title="Specialty Pizzas"
                    body="All specialty pies are cooked to order in small, medium and large sizes"
                ></MenuSectionIntro>
                <MenuItem
                    name="Margherita"
                    price="$12 | $16 | $22"
                    details="Add your specialty toppings here"
                ></MenuItem>
            </MenuSectionContainer>
        </Container>
    );
};

export default MenuPage;
