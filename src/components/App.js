import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './Header';
import Sections from './Sections';
import Random from './Random';
import Bubbles from './Bubbles';
import Footer from './Footer';
import {data} from '../data/data'

function App() {

  const [selectedSection, setSelectedSection] = useState(1)

  const [names, setNames] = useState(data[selectedSection - 1].names)

  const clearNames = () => {
    data[selectedSection - 1].names = []
    setNames([...names])
  }

    useEffect(() => {
    // Update names in Bubbles comp 
    setNames(data[selectedSection - 1].names)
    //set local storage data in console
    localStorage.setItem('data', JSON.stringify(data));
    console.log('this is local storage: ' + localStorage.getItem('data'))
    console.log('selectionSection is: ', selectedSection)
    console.log('current names in names list:', names)
    console.log('this is data: ', JSON.stringify(data))
    
  }, [names, selectedSection])
  
  return (
    <div className="App">
      
      <Header />
      
      <Sections data={data}  setSelectedSection={setSelectedSection} clearNames={clearNames}/>
      
      <Random names={names} />

      <Bubbles data={data} selectedSection={selectedSection} names={names} setNames={setNames}/>

      <Footer />

    </div>
  );
}

export default App;
