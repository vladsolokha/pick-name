//displays 6 sections
//singleclick handles update canvas with new names
//doubleclick handles deleting names from section
//

import React, {useEffect, useState} from 'react'
import './Section.css'
import {data} from '../data/data'

function Sections(props) {
  

  const sectionButton = data.map(section => 
    <div className='single-button-container'>
      <button 
        key={section.id}
        className="single-button">
          {section.number}
      </button>
    </div>
  )

  return (
    <div className='sections-area'>
      <ul className='all-buttons-container'>{sectionButton}
      </ul>
    </div>
  );
}
export default Sections;