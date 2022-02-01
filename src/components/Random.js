// get all names from Bubbles component 
// click (r key) handles random name selection 
// send update to student phone 

import React, { useState } from "react";
import "./Random.sass";

function Random() {
    
    const [randomName, setRandomName] = useState('')     
    const [names, setNames] = useState([])
    

    return ( 
        <div className="random-container">
            <button className="random-button" onClick={() => {
                setRandomName(names[Math.floor(Math.random() * names.length)])
            }}>POPcicle</button>
        </div>
     )
}

export default Random