// get all names from canvas component 
// click (r key) handles random name selection 
// send update to student phone 

import React, { useState } from "react";

function Random() {
    
    const [randomName, setRandomName] = useState('')     
    const [names, setNames] = useState([])
    

    return ( 
        <div className="random-container">
            <button className="random-button" onClick={() => {
                setRandomName(names[Math.floor(Math.random() * names.length)])
            }}></button>
        </div>
     )
}

export default Random