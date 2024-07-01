import React, { useState } from 'react'
import Home from './scr/screens/home'
import AddNote from './scr/screens/addNote'
import EditNote from './scr/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, setNoteToEdit, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          deleteNote={deleteNote}
          setNoteToEdit={setNoteToEdit}
          setCurrentPage={setCurrentPage}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote}   />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id =
      noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const [noteToEdit, setNoteToEdit] = useState(null);

  const deleteNote = (id) => {
    const filteredNotes = noteList.filter((note) => note.id !== id);
    setNoteList(filteredNotes);
  };

  const editNote = (id, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        }
      }
      return note
    })
    setNoteList(newNoteList);
    setNoteToEdit(null);
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      noteToEdit={noteToEdit}
      setNoteToEdit={setNoteToEdit}

    />
  )
}

export default App