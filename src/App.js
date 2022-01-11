import React from 'react';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import './styles/lrgGrid.css';

const App = () => {
    return (
        <div className='grid'>
            <Navbar/>
            <main className="main">
                <Header/>
                <AboutMe/>
                <Projects/>
                <Footer/>
            </main>
            
        </div>
    )
}

export default App;
