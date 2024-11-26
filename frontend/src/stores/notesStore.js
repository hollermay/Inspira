import { create } from 'zustand';
import axios from 'axios';

const useNotesStore = create((set, get) => ({
  notes: null,
  createForm: {
    title: "",
    body: "",
  },
  updateForm: {
    _id: null,
    title: "",
    body: "",
  },

  fetchNotes: async () => {
    const res = await axios.get('http://localhost:3000/notes');
    set({ notes: res.data.notes });
  },

  updateCreateForm: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      createForm: {
        ...state.createForm,
        [name]: value,
      },
    }));
  },

  createNote: async (e) => {
    e.preventDefault();
    const { createForm } = get();
    const res = await axios.post('http://localhost:3000/notes', createForm);

    set((state) => ({
      notes: [...state.notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    }));
  },

  deleteNote: async (_id) => {
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    const { notes } = get();
    const newNotes = notes.filter((note) => note._id !== _id);

    set({ notes: newNotes });
  },

  handleUpdate: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      updateForm: {
        ...state.updateForm,
        [name]: value,
      },
    }));
  },

  toggleUpdate: (note) => {
    set({ updateForm: { title: note.title, body: note.body, _id: note._id } });
  },

  updateNote: async () => {
    const { updateForm: { title, body, _id }, notes } = get();
    const res = await axios.put(`http://localhost:3000/notes/${_id}`, { title, body });
    const updatedNote = res.data.note;

    const newNotes = [...notes];
    const index = newNotes.findIndex((note) => note._id === _id);

    if (index !== -1) {
      newNotes[index] = updatedNote;
    }

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        title: "",
        body: "",
      },
    });

  },
}));

export default useNotesStore;
