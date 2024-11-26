import {useEffect } from 'react'

import useNotesStore from '../stores/notesStore'


function App() {
  const store = useNotesStore();

 
  useEffect(() => {
    store.fetchNotes();
  }, []);




  return (
    <>
      <div>
      <h2>Notes:</h2>
      <ul>
        {store.notes && store.notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => store.deleteNote(note._id)}> Delete</button>
            <button onClick={() => store.toggleUpdate(note)}>Update</button>
          </li>
        ))}
      </ul>


      </div> 

      {store.updateForm._id &&  (<div>
        <h2>Update Note</h2>
        <form onSubmit={store.updateNote}>
          <input onChange={store.handleUpdate} value={store.updateForm.title} name='title' type="text" placeholder="Title" />
          <textarea onChange={store.handleUpdate} value={store.updateForm.body} name='body' placeholder="Body" />
          <button type="submit">Update Note</button>
        </form>
      </div>)}

      <div>
        <h2> Create Note</h2>
        <form onSubmit={store.createNote}>
          <input onChange={store.updateCreateForm} value={store.createForm.title} name='title' type="text" placeholder="Title" />
          <textarea onChange={store.updateCreateForm} value={store.createForm.body} name='body' placeholder="Body" />
          <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App;
