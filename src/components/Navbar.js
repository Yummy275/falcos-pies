import React from 'react';
import styled from 'styled-components';
import menuIcon from '../images/hamburger-menu-icon.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
`;

const Title = styled.div`
    margin-left: 1.5rem;
    font-style: italic;
    font-size: 3rem;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

const MenuIcon = styled.input`
    height: 1.3rem;
    width: 1.3rem;

    @media (min-width: 768px) {
        display: none;
    }
`;

const OptionsHolder = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavOptions = styled.a`
    font-size: 1rem;
`;

const Navbar = () => {
    return (
        <Container>
            <MenuIcon type="image" src={menuIcon}></MenuIcon>
            <Title>Falco's</Title>
            <OptionsHolder>
                <NavOptions>Home</NavOptions>
                <NavOptions>Menu</NavOptions>
                <NavOptions>Contact</NavOptions>
            </OptionsHolder>
        </Container>
    );
};

export default Navbar;
