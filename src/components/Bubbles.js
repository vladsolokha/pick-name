/* TO-DO
    - Add store namesState to localStorage
    - Add animate bubbles with matter.js
*/

import React, { useCallback, useEffect, useState } from 'react';
import './Bubbles.sass';

function Bubbles({names, setNames}) {
    const [inputOn, setInputOn] = useState(false)
    const [editBubbleValue, setEditBubbleValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    
    const handleEsc = useCallback((e) => {
        if(e.keyCode === 27) {
            setInputOn(false)
        }
    }, []);
    
    const handleInputOn = () => { 
        setInputOn(true)
    }

    const handleAddName = (e) => {
        e.preventDefault()
        names.push(inputValue)
        setNames([...names])
        setInputValue('')
        setInputOn(false)
    }
    
    const handleRemoveName = (e) => {
        names.splice(names.indexOf(e), 1)
        setNames([...names])
    }
    const handleEditName = (e) => {
        if (e.key === 'Enter') {
            names.splice(names.indexOf(e),1,editBubbleValue)
        }
        setNames([...names])
    }
    useEffect(() => {
        // Escape to hide input, always listen
        document.addEventListener('keydown', handleEsc, false)
        return () => {
            document.removeEventListener('keydown', handleEsc, false)
        }
    }, [handleEsc])
    
    return ( 
        
        <div 
            className='bubbles-container'
            onClick={handleInputOn}>
            
        {inputOn && 
            <div className="bubble-input">
                <form>
                    <input
                        className='input-field' 
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} 
                        placeholder="ENTER NAME"
                        size="10"
                        minLength="2"
                        maxLength="10">
                    </input>
                    <button 
                        className='submit-button' onClick={handleAddName} type='submit'>ADD</button>
                </form>
            </div>
        }
        <div className='display-names'>
            {names.map((name, index) =>
                <input
                    className="bubble" 
                    type='text'
                    key={index.toString()} 
                    value={editBubbleValue} 
                    onChange={e => {setEditBubbleValue(e.target.value)}}
                    onKeyPress={(e) => {handleEditName(e.target.value)}}
                    onDoubleClick={e => {handleRemoveName(e.target.value)}}/>
            )} 

        </div>
            
        </div>
    )
}

export default Bubbles