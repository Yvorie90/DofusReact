import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Fourofour from './pages/Fourofour';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<Fourofour/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Apropos" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;