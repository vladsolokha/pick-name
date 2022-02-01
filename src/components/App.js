import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './Header';
import Sections from './Sections';
import Random from './Random';
import Bubbles from './Bubbles';
import Footer from './Footer';
import {data} from '../data/data'

function App() {
  const [selectedSectionState, setSelectedSectionState] = useState(1)

  //passed to Sections component, handles section selection
  const selectedSection = (sectionData) => {
    setSelectedSectionState(sectionData)
  }
  
  const names = data[selectedSectionState - 1].names

  //see local storage data in console
  localStorage.setItem('data', JSON.stringify(data));
  
  useEffect(() => {
    console.log(localStorage.getItem('data'))
    console.log('selectionSectionState', selectedSectionState)
    console.log('names', names)
  }, [selectedSectionState])
  
  return (
    <div className="App">
      
      <Header />
      
      <Sections data={data} selectedSection={selectedSection}/>
      
      <Random />

      <Bubbles names={names}/>

      <Footer />

    </div>
  );
}

export default App;
