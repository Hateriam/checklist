import React, { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])
  const [value, setValue] = useState('Введите задание')
  
  let result = notes.map((note, index) => {
    return <ol key={index}>
        {note}
        <button>V</button>
        <button onClick={() => delTask(index)}>X</button>
    </ol> 
  })
  
  function delTask(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])
    }
    
    
    function add () {
      setNotes([...notes, value])
    }
    
  return <div className='checklist'>
    {result}
    <input value={value} onChange={event => setValue(event.target.value)}/>
    <button id='button' onClick={add}>Добавить задание</button>
    </div>
  }

export default App;
