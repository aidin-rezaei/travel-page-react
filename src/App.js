import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/"/>
      </Routes>
    </div>
  );
}

export default App;
