import React from 'react';
import './App.css';

import Header from './Header';
import Sections from './Sections';
import Random from './Random';
import Bubbles from './Bubbles';
import Footer from './Footer';
import {data} from '../data/data'

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Sections data={data}/>
      
      <Random />

      <Bubbles data={data}/>

      <Footer />

    </div>
  );
}

export default App;
