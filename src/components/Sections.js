//displays 6 sections
//singleclick handle names of section to bubbles
//doubleclick handles deleting names from section

import React, {useEffect, useState} from 'react'
import { useSpring, animated } from 'react-spring'
import './Section.css'

function Sections({data}) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    console.log('selected', selected)
  }, [selected])

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
        onClick={e => setSelected(e.target.value)}>
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