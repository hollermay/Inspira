import { useState,useEffect } from 'react'
import axios from 'axios'



function App() {
  const[notes, setNotes] = useState([]);
  const[create,setCreate] = useState({
    title: "",
    body: "",
  });
  const[update,setUpdate] = useState({
    _id:null,
    title: "",
    body: "",
  });
  
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:3000/notes')
    setNotes(res.data.notes);
    console.log(res);
  };

  const updateForm = (e) => {
    const{name, value} = e.target;

    setCreate({
      ...create,
      [name]: value,
    });
  }

  const createNote = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/notes', create);
    console.log(res);

    setNotes([...notes, res.data.note]);

    setCreate({
      title: "",
      body: "",
    });
  }

  const deleteNote = async (_id) => {
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    console.log(res);

    const newNotes = notes.filter((note) => note._id !== _id);
    setNotes(newNotes);
  }

  const handleUpdate = (e) => {
    const{name, value} = e.target;

    setUpdate({
      ...update,
      [name]: value,
    });
  }

  const toggleUpdate = (note) => {
    // get current note values
    setUpdate({title: note.title, body: note.body, _id: note._id} );
    //update the stare
  }

  const updateNote = async () => {
    try {
      const { title, body } = update;
  
      const res = await axios.put(`http://localhost:3000/notes/${update._id}`, { title, body });
  
      const newNotes = [...notes];
      const index = newNotes.findIndex((note) => note._id === update._id);
      console.log(res);
      newNotes[index] = res.data.note;
      setNotes(newNotes);
  
      setUpdate({
        _id: null,
        title: "",
        body: "",
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };
  


  return (
    <>
      <div>
      <h2>Notes:</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => deleteNote(note._id)}> Delete</button>
            <button onClick={() => toggleUpdate(note)}>Update</button>
          </li>
        ))}
      </ul>


      </div> 

      {update._id &&  (<div>
        <h2>Update Note</h2>
        <form onSubmit={updateNote}>
          <input onChange={handleUpdate} value={update.title} name='title' type="text" placeholder="Title" />
          <textarea onChange={handleUpdate} value={update.body} name='body' placeholder="Body" />
          <button type="submit">Update Note</button>
        </form>
      </div>)}

      <div>
        <h2> Create Note</h2>
        <form onSubmit={createNote}>
          <input onChange={updateForm} value={create.title} name='title' type="text" placeholder="Title" />
          <textarea onChange={updateForm} value={create.body} name='body' placeholder="Body" />
          <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App;
