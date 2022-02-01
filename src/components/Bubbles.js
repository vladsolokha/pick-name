//names come in from app
//Render map each name as slow bubble 
//floating in large container with collisions

import React, { useEffect, useState } from 'react';
import './Bubbles.sass';

function Bubbles({names}) {
    const [inputOn, setInputOn] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [namesState, setNamesState] = useState(names)
    
    useEffect(() => {
        console.log('namesState', namesState)
    }, [namesState])

    const handleAddName = () => { setInputOn(true) }

    const handleSubmitName = (e) => {
        setInputOn(false)
        setNamesState([...namesState, e])
        setInputValue('')
    }

    const handleRemoveName = (e) => {
        console.log(namesState)
        let index = namesState.indexOf(e)
        console.log(index, ' is index of e.target.value')
        setNamesState(namesState.splice(index, 1))
    }

    return ( 
        
        <div 
            className='bubbles-container'
            onClick={handleAddName}>
            
            <div className='display-name'>
                {namesState.map(name =>
                    <button 
                        className="bubble" 
                        key={name} 
                        value={name} 
                        onDoubleClick={e => handleRemoveName(e.target.value)}>
                    {name}
                    </button>)
                }
            </div>
            
            {inputOn && 
            
            <div className="bubble-input">
                <form onSubmit={e => handleSubmitName(inputValue)}>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} 
                        placeholder="ENTER NAME"
                        autoComplete="name"
                        size="10"
                        minLength="2"
                        maxLength="10">
                    </input>
                    <button type="submit">ADD</button>
                </form>
            </div>
            }

        </div>
    
    )
}

export default Bubbles