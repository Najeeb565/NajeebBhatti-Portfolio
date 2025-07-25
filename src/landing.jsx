import React from 'react';
import Home from './components/home/homeComp'
import About from './components/about/aboutComp'
import Project from './components/projects/projectComp'
import Contact from './components/contact/contactComp';
import Footer from './components/footer/footerComp'
function Landing() {
    return (
        <div>
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default Landing