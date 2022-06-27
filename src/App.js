import './App.css';
import React from "react";


import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {HashRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project/:id" element = {<ProjectDisplay />} />
                        <Route path="/experience" element={<Experience />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>



    );
}

export default App;
