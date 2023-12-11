// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contect';
import Navbar from './components/navbar';
import Getstud from './components/getstud';
import AddStud from './components/addStud';
import Update from './components/update';

const App = () => {
  return (
    <Router>
      <ToastContainer />
    
    <div>
      <div className='mb-5'>
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view" element={<Getstud/>} />
          <Route path="/addstud" element={<AddStud/>} />
          <Route path="/addstud/:id" element={<Update/>} />
        </Routes>
    </div>
    
    </Router>
  );
};

export default App;
