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

const NavOption = styled.a`
    cursor: pointer;
    font-size: 1.1rem;
    transition: transform 0.2s ease-in;

    :hover {
        transform: scale(1.1);
    }

    ${(props) =>
        props.activePage === props.option
            ? 'border-bottom: 2px solid grey'
            : ''}
`;

const Navbar = ({ activePage, setActivePage }) => {
    const [navMenuHidden, setNavMenuHidden] = useState(true);

    const showMenu = () => {
        setNavMenuHidden(false);
    };

    const hideMenu = () => {
        setNavMenuHidden(true);
    };

    return (
        <>
            <NavMenu
                hidden={navMenuHidden}
                hideMenu={hideMenu}
                activePage={activePage}
                setActivePage={setActivePage}
            ></NavMenu>
            <Container>
                <MenuIcon
                    onClick={showMenu}
                    type="image"
                    src={menuIcon}
                ></MenuIcon>
                <Title>Falco's</Title>
                <OptionsHolder>
                    <NavOption
                        activePage={activePage}
                        option="home"
                        onClick={() => {
                            setActivePage('home');
                        }}
                    >
                        Home
                    </NavOption>
                    <NavOption
                        activePage={activePage}
                        option="menu"
                        onClick={() => {
                            setActivePage('menu');
                        }}
                    >
                        Menu
                    </NavOption>
                    <NavOption
                        activePage={activePage}
                        option="contact"
                        onClick={() => {
                            setActivePage('contact');
                        }}
                    >
                        Contact
                    </NavOption>
                </OptionsHolder>
            </Container>
        </>
    );
};

export default Navbar;
