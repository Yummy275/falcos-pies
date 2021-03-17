import React from 'react';
import styled from 'styled-components';
import TextWithDivider from '../components/TextWithDivider';
import MenuSectionIntro from '../components/MenuSectionIntro';
import MenuSectionContainer from '../components/MenuSection';
import menuItemsSpPizza from '../components/menuItemsSpPizza';

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
                {menuItemsSpPizza}
            </MenuSectionContainer>
        </Container>
    );
};

export default MenuPage;
