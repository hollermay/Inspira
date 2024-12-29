import { create } from "zustand";
import api from "../api/api";

const useReadmeStore = create((set) => ({
    readmes: null,
    readme: null,
    createForm: {
        title: "",
        content: "",
    },

    updateForm: {
        _id: null,
        title: "",
        content: "",
    },

    fetchReadmes: async () => {
        // Fetch the readmes
        const res = await api.get(`/readmes`);

        // Set to state
        set({ readmes: res.data.readmes });
    },

    fetchReadme: async (_id) => {
        const res = await api.get(`/readmes/${_id}`);
        
        set({ readme: res.data.readme });
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => ({
            createForm: {
                ...state.createForm,
                [name]: value,
            },
        }));
    },

    createReadme: async (e) => {
        e.preventDefault();

        const { createForm, readmes } = useReadmeStore.getState();
        const res = await api.post("/readmes", createForm);

        set({
            readmes: [...readmes, res.data.readme],
            createForm: {
                title: "",
                content: "",
            },
        });
    },

    deleteReadme: async (_id) => {
        // Delete the readme
        await api.delete(`/readmes/${_id}`);
        const { readmes } = useReadmeStore.getState();

        // Update state
        const newReadmes = readmes.filter((readme) => readme._id !== _id);

        set({ readmes: newReadmes });
    },

    handleUpdateFieldChange: (e) => {
        const { value, name } = e.target;

        set((state) => ({
            updateForm: {
                ...state.updateForm,
                [name]: value,
            },
        }));
    },

    toggleUpdate: ({ _id, title, content }) => {
        set({
            updateForm: {
                title,
                content,
                _id,
            },
        });
    },

    updateReadme: async (e) => {
        e.preventDefault();

        const {
            updateForm: { title, content, _id },
            readmes,
        } = useReadmeStore.getState();

        // Send the update request
        const res = await api.put(`/readmes/${_id}`, {
            title,
            content,
        });

        // Update state
        const newReadmes = [...readmes];
        const readmeIndex = readmes.findIndex((readme) => readme._id === _id);
        newReadmes[readmeIndex] = res.data.readme;

        set({
            readmes: newReadmes,
            updateForm: {
                _id: null,
                title: "",
                content: "",
            },
        });
    },
}));

export default useReadmeStore;
