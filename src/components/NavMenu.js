import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: ${(props) => (props.hidden ? '0%' : '100%')};
    z-index: 2;
    overflow: hidden;
    background-color: #000000eb;
    color: white;
    transition: width 2s;
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
                        setActivePage('home');
                    }}
                >
                    Home
                </Option>
                <Option
                    activePage={activePage}
                    option="menu"
                    onClick={() => {
                        setActivePage('menu');
                    }}
                >
                    Menu
                </Option>
                <Option
                    activePage={activePage}
                    option="contact"
                    onClick={() => {
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
