
import React, { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])
  const [value, setValue] = useState('Введите текст')
  const [isEdit, setIsEdit] = useState(false)
  
  let result = notes.map((note, index) => {
    if (!isEdit) {
      note = notes[index]
    } else {
      note = <input className='editinput' value={notes[index]} onChange={event => changeData(index, event)} />
    }
    return <ol key={index}>
        {note}
        <button className='donebutton' onClick={event => itDone(event)}>V</button>
        <button className='delbutton' onClick={() => delTask(index)}>X</button>
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
      setValue('Введите текст')
    }
    
  return <div className='checklist'>
    <h1>Список дел</h1>
    {result}
    <input value={value} onChange={event => setValue(event.target.value)}/>
    <button id='button' onClick={add}>Добавить в список</button>
    <button className='editbutton' onClick={() => setIsEdit(!isEdit)}> {isEdit ? 'Сохранить список' : 'Редактировать список'}</button>
    </div>
  }

export default App;


