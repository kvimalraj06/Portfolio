import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './contents/About';
import Skills from './contents/Skills';
import Projects from './contents/Projects';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <About />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/projects">
    <Projects />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  