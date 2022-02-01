/* TO-DO
    - Add store namesState to localStorage
    - Add animate bubbles with matter.js
*/

import React, { useCallback, useEffect, useState } from 'react';
import './Bubbles.sass';

function Bubbles({names, selectedSection}) {
    const [inputOn, setInputOn] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [namesState, setNamesState] = useState(names)
    const handleEsc = useCallback((e) => {
        if(e.keyCode === 27) {
            setInputOn(false)
        }
    }, []);
    
    
    const handleAddName = () => { setInputOn(true) }
    
    const handleSubmitName = (e) => {
        setInputOn(false)
        setNamesState([...namesState, e])
        setInputValue('')
    }
    
    const handleRemoveName = (e) => {
        namesState.splice(namesState.indexOf(e), 1)
        setNamesState([...namesState])
    }
    
    useEffect(() => {
        setNamesState(names)
        console.log('namesState is: ', namesState)
        
        document.addEventListener('keydown', handleEsc, false)
        
        return () => {
            document.removeEventListener('keydown', handleEsc, false)
        }
    }, [selectedSection, names, namesState, handleEsc])
    
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
                        className='input-field' 
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} 
                        placeholder="ENTER NAME"
                        autoComplete="name"
                        size="10"
                        minLength="2"
                        maxLength="10">
                    </input>
                    <button className='submit-button' type="submit">ADD</button>
                </form>
            </div>
            }

        </div>
    
    )
}

export default Bubbles