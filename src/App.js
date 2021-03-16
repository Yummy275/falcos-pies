import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
    const PageHolder = styled.div`
        padding-top: 4rem;
    `;

    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navbar
                activePage={activePage}
                setActivePage={setActivePage}
            ></Navbar>
            <PageHolder>
                <HomePage></HomePage>
            </PageHolder>
        </>
    );
}

export default App;
