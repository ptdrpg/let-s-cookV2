import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Nav from './component/layout/nav/Nav';
import Login from './page/Login';
import Footer from './component/layout/Footer/Footer';
import SIgnup from './page/SIgnup';
import { useState } from 'react';
import { secureHeapUsed } from 'crypto';

function App() {
  const [connected, setConnected] = useState<boolean>(true)
  return (
    <BrowserRouter>
      <Nav connected={connected} setConnected={setConnected} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SIgnup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
