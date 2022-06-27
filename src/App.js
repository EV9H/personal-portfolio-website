import './App.css';
import React from "react";


import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

import './fonts/LeagueSpartan-Bold.otf';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                    <Navbar />
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project/:id" element = {<ProjectDisplay />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                    <Footer />
            </Router>
        </div>



    );
}

export default App;
