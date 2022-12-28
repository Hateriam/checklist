
import React, { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])
  const [value, setValue] = useState('Введите задание')
  const [isEdit, setIsEdit] = useState(false)
  
  let result = notes.map((note, index) => {
    if (!isEdit) {
      note = notes[index]
    } else {
      note = <input className='editinput' value={notes[index]} onChange={event => changeData(index, event)} />
    }
    return <ol key={index}>
        {note}
        <button className='notebutton' onClick={event => itDone(event)}>V</button>
        <button className='notebutton' onClick={() => setIsEdit(!isEdit)}> {isEdit ? 'Сохр.' : 'Редакт.'}</button>
        <button className='notebutton' onClick={() => delTask(index)}>X</button>
    </ol> 
    })
    
    function changeData(index, event) {
      setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)])
      }
    
    
    function itDone(event) {
      let elem = event.target
      elem.closest('ol').classList.toggle('crossline')
    }
    
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


