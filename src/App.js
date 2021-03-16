import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navbar
                activePage={activePage}
                setActivePage={setActivePage}
            ></Navbar>
            <HomePage></HomePage>
        </>
    );
}

export default App;
