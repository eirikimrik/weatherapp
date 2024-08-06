import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutUs } from './pages/AboutUs';
import Home from './pages/Home';
import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
