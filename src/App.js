import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Produocts from './components/pages/Products';
import SingUp from './components/pages/SingUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Produocts/>}/>
          <Route path="/sing-up" element={<SingUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
