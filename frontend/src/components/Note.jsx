import useNotesStore from "../stores/notesStore";
import Note from "./Note";

export default function Notes() {
  const store = useNotesStore();

  return (
    <>
    <div>
      <h2>Notes:</h2>
      {store.notes &&
        store.notes.map((note) => {
          return <Note note={note} key={note._id} />;
        })}
    </div>
    </>
  );
}