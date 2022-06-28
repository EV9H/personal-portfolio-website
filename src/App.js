import './App.css';
import React from "react";


import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay'

import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './fonts/LeagueSpartan-Bold.otf';
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>


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
