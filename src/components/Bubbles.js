/* TO-DO
    - Add store namesState to localStorage
    - Add animate bubbles with matter.js
    - If bubble is in focus/active disable dblclick
*/

import React, { useCallback, useEffect, useState } from 'react';
import './Bubbles.sass';

function Bubbles({names, setNames}) {
    const [inputOn, setInputOn] = useState(false)
    const [editBubbleValue, setEditBubbleValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [duplicateNameCount, setDuplicateNameCount] = useState(1)
    const [bubbleState, setBubbleState] = useState('inactive')
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
        // includes method is a quick way to check whether the entered name was already present in names and returns true if there are duplicate names. 
        // Duplicate names will throw off the map method when redering duplicate keys.
        if (names.includes(inputValue)) {
            names.push(inputValue+duplicateNameCount)
            setDuplicateNameCount(duplicateNameCount + 1)
        } else {
        names.push(inputValue)
        }
        setNames([...names])
        setInputValue('')
        setInputOn(false)
    }
    
    const handleRemoveName = (e) => {
        names.splice(names.indexOf(e), 1)
        setNames([...names])
    }
    const handleEditName = (e) => {
        names.splice(names.indexOf(e),1,editBubbleValue)
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
                        className='submit-button' 
                        onClick={handleAddName} 
                        type='submit'
                    >
                        ADD
                    </button>
                </form>
            </div>
        }
        <div className='display-names'>
            {names.map((name) =>
                {if (bubbleState === 'inactive') {
                    return <div
                        className="bubble" 
                        key={name} 
                        value={name} 
                        onClick={setBubbleState('active')}
                    ></div>
                }}
                
                {isBubbleSelected &&
                    <div 
                        className='edit-bubble'
                        onClick={e => setEditBubbleValue(e.target.value)}
                    >
                        Edit
                    </div>
                }
            </div>
            )}
        </div>
        
        </div>
    )
}

export default Bubbles