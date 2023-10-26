import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Nav from './component/layout/nav/Nav';
import Login from './page/Login';
import Footer from './component/layout/Footer/Footer';
import SIgnup from './page/SIgnup';
import { useState } from 'react';
import Profiles from './page/Profiles';

function App() {
  const [connected, setConnected] = useState<boolean>(true)
  return (
    <BrowserRouter>
      <Nav connected={connected} setConnected={setConnected} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setConnected={setConnected} />} />
        <Route path='/signup' element={<SIgnup setConnected={setConnected} />} />
        <Route path='/profile' element={<Profiles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
