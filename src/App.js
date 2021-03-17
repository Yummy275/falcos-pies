import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

const PageHolder = styled.div`
    padding-top: 4rem;
`;

function App() {
    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navbar
                activePage={activePage}
                setActivePage={setActivePage}
            ></Navbar>
            <PageHolder>
                {activePage === 'home' ? (
                    <HomePage></HomePage>
                ) : activePage === 'menu' ? (
                    <MenuPage></MenuPage>
                ) : (
                    ''
                )}
            </PageHolder>
        </>
    );
}

export default App;
