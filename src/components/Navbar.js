import React, { useState } from 'react';
import styled from 'styled-components';
import menuIcon from '../images/hamburger-menu-icon.png';
import NavMenu from './NavMenu';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;

const Title = styled.div`
    margin-left: 1.5rem;
    font-style: italic;
    font-size: 3rem;

    @media (min-width: 768px) {
        margin: 0 0 0 0.5rem;
        font-size: 2rem;
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
    justify-content: space-evenly;
    width: 18rem;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavOptions = styled.a`
    cursor: pointer;
    font-size: 1.1rem;
    transition: transform 0.4s ease-in;

    :hover {
        transform: scale(1.2);
    }
`;

const Navbar = () => {
    const [navMenuHidden, setNavMenuHidden] = useState(true);

    const showMenu = () => {
        setNavMenuHidden(false);
    };

    const hideMenu = () => {
        setNavMenuHidden(true);
    };

    return (
        <>
            <NavMenu hidden={navMenuHidden} hideMenu={hideMenu}></NavMenu>
            <Container>
                <MenuIcon
                    onClick={showMenu}
                    type="image"
                    src={menuIcon}
                ></MenuIcon>
                <Title>Falco's</Title>
                <OptionsHolder>
                    <NavOptions>Home</NavOptions>
                    <NavOptions>Menu</NavOptions>
                    <NavOptions>Contact</NavOptions>
                </OptionsHolder>
            </Container>
        </>
    );
};

export default Navbar;
