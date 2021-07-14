import React, {useState, useEffect} from 'react';
import './App.css';


const students = [
  {
    id: 1,
    class:'math',
    studentNames: ['joe ', 'bob ', 'billy ', 'isaac '],
  },
  {
    id: 2,
    class: 'science',
    studentNames: ['fred', 'chris', 'zack', 'shawn', 'joshua', 'amy'],
  }
];

function App() {
  const [names, setNames] = useState(students);
  const [randomName, setRandomName] = useState('');
  const [selectedClass, setSelectedClass] = useState(1);
  const min = 0;
  const max = names[Number(selectedClass - 1)].studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const getName = names[Number(selectedClass - 1)].studentNames[randomNumber];
    setRandomName(getName);
  };

  const classHandler = (e) => {
    setSelectedClass(e.target.value)
    
  }
  console.log(selectedClass)

  return (
    <div className="App">
      <header className="App-header">
        <span>Green Valley Ranch High School</span>
        <button>➕ student</button>
      </header>
      <main className='main'>
          <label for='class'>choose class </label>
          <select
            defaultValue={selectedClass}
            onChange={classHandler}
          >
            <option value='1'>math</option>
            <option value='2'>science</option>
          </select>
        <p>random name: {randomName}</p>
        <button onClick={getRandomName} >click me</button>
      </main>
      <footer className='footer'>
        <p>🎶 Im a school yo</p>
      </footer>
    </div>
  );
}

export default App;
