// get all names from Bubbles component 
// click (r key) handles random name selection 
// send update to student phone 

import React, { useState, useEffect } from "react";
import "./Random.sass";

function Random({names}) {
    const [randomName, setRandomName] = useState('')
    const [namesState, setNamesState] = useState(names)

    const handleRandomName = () => {
        setRandomName(namesState[Math.floor(Math.random() * names.length)])
    }
 
    useEffect(() => {
        setNamesState(names)
    }, [names])

    return ( 
        <div className="random-container">
            <button 
                    className="random-button" 
                onClick={handleRandomName}>
            POPcicle
            </button>
        
            <div className="display-name">
                {randomName}
            </div>
            
        </div>
     )
}

export default Random