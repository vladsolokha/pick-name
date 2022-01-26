import React, {useState} from 'react';
import './App.css';

import Header from './Header';
import Sections from './Sections';
import Random from './Random';
import Bubbles from './Bubbles';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Sections />
      
      <Random />

      <Bubbles />

      <Footer />

    </div>
  );
}

export default App;
