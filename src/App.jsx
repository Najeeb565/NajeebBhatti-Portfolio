// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbarComp';  
import Home from './components/home/homeComp';
import About from './components/about/aboutComp';
import Project from './components/projects/projectComp';
import Contact from './components/contact/contactComp';
import Landing from './landing'; 
import Footer from './components/footer/footerComp';
import './style/global.css';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
