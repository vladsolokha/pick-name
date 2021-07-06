import React, {useState, useEffect} from 'react';
import './App.css';


const students = ['joe ', 'bob ', 'billy ', 'isaac '];

function App() {
  const [names, setNames] = useState(students);
  const [randomName, setRandomName] = useState('')
  const min = 0;
  const max = names.length;

  const buttonHandler = () => {
    const getName = names[Math.floor(Math.random() * (max - min) + min)];

    setRandomName(getName)
  }

  useEffect(() => {
    buttonHandler()
  })
 

  return (
    <div className="App">
      <header className="App-header">
        <p>{randomName}</p>
        <button onClick={buttonHandler}>get name</button>
      </header>
    </div>
  );
}

export default App;
