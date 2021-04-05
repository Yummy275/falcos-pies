import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    height: 100%;
    transition: width 2s linear;
    width: ${(props) => (props.hidden ? '0%' : '100%')};
    z-index: 2;
    background-color: #000000eb;
    color: white;
`;

const Options = styled.div`
    height: 16rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Close = styled.a`
    align-self: flex-end;
`;

const Option = styled.a`
    font-size: 1.1rem;
    ${(props) =>
        props.activePage === props.option ? 'font-weight: bold;' : ''}
`;

const NavMenu = ({ hidden, hideMenu, activePage, setActivePage }) => {
    return (
        <Container hidden={hidden}>
            <Options>
                <Close onClick={hideMenu}>X</Close>
                <Option
                    activePage={activePage}
                    option="home"
                    onClick={() => {
                        hideMenu();
                        window.scrollTo(0, 0);
                        setActivePage('home');
                    }}
                >
                    Home
                </Option>
                <Option
                    activePage={activePage}
                    option="menu"
                    onClick={() => {
                        hideMenu();
                        window.scrollTo(0, 0);
                        setActivePage('menu');
                    }}
                >
                    Menu
                </Option>
                <Option
                    activePage={activePage}
                    option="contact"
                    onClick={() => {
                        hideMenu();
                        window.scrollTo(0, 0);
                        setActivePage('contact');
                    }}
                >
                    Contact
                </Option>
            </Options>
        </Container>
    );
};

export default NavMenu;
