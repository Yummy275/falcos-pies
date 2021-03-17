import React from 'react';
import styled from 'styled-components';
import TextWithDivider from '../components/TextWithDivider';
import MenuSectionIntro from '../components/MenuSectionIntro';
import MenuSectionContainer from '../components/MenuSection';
import menuItemsSpPizza from '../components/menuItemsSpPizza';
import menuItemsBuild from '../components/menuItemsBuild';
import menuItemsPasta from '../components/menuItemsPasta';
import menuItemsDrinks from '../components/menuItemsDrinks';
import Footer from '../components/Footer';

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
                <MenuSectionIntro
                    title="Build Your Own Pizzas"
                    body="Smokin' Hot Meats -
                    cured pepperoni, chorizo sausage, flamed grilled chicken,
                    spicy buffalo chicken, crispy bacon strips, bacon crumble |
                    Fresh Vegetables - green pepper, caramelized onion,
                    mushroom, artichoke hearts, red onion, green olives, black
                    olives"
                ></MenuSectionIntro>
                {menuItemsBuild}
                <MenuSectionIntro
                    title="Entrees"
                    body="Pasta Mains"
                ></MenuSectionIntro>
                {menuItemsPasta}
                <MenuSectionIntro
                    title="Drinks"
                    body="Alcoholic, non alcoholic"
                ></MenuSectionIntro>
                {menuItemsDrinks}
            </MenuSectionContainer>
            <Footer></Footer>
        </Container>
    );
};

export default MenuPage;
