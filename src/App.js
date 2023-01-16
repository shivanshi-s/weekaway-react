import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
