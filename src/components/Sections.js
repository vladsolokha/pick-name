/* TO-DO
    - doubleclick handles deleting names from section
    - turn red when list is modified
    - click on red bubble to store names in localStorage
    - when other components active, persist green active bubble
*/


import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Section.css'

function Sections({data, selectedSection}) {
  
  const handleClearAllNames = (e) => {
    data.selectedSection.names = []
  }
  
  const interp = (i) => (r) => `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

  const { radians } = useSpring({
    to: async (next) => {
      while (1) {
        await next({ radians: 2 * Math.PI, reset: true })
    }
  },
    from: { radians: 0 },
    reset: true,
    config: { duration: 6000 },
  })

  const sectionButton = data.map(section => 
    
      <animated.button 
        key={section.id}
        value={section.number}
        style={{ transform: radians.to(interp(section.id)) }}
        className="single-button"
        onClick={e => selectedSection(e.target.value)}
        onDoubleClick={e => handleClearAllNames(e.target.value)}>
      {section.number}
      </animated.button>
    
  )

  return (
    <div className='sections-area'>
      <div className='all-buttons-container'>{sectionButton}
      </div>
    </div>
  );
}

export default Sections;