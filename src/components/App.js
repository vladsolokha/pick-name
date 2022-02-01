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
  const selectedSection = (sectionNumber) => {
    setSelectedSectionState(sectionNumber)
  }
  
  const names = data[selectedSectionState - 1].names

  //see local storage data in console
  localStorage.setItem('data', JSON.stringify(data));
  
  useEffect(() => {
    // console.log(localStorage.getItem('data'))
    console.log('selectionSectionState', selectedSectionState)
  }, [selectedSectionState])
  
  return (
    <div className="App">
      
      <Header />
      
      <Sections data={data} selectedSection={selectedSection}/>
      
      <Random names={names} selectedSection={selectedSectionState}/>

      <Bubbles names={names} selectedSection={selectedSectionState}/>

      <Footer />

    </div>
  );
}

export default App;
