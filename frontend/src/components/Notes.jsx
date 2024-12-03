import useNotesStore from '../stores/notesStore';





export default function Note() {

    const store = useNotesStore((store) => {
        return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
      });
    


    return (
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
    );
    }