import { create } from "zustand";
import api from "../api/api";  // Import the custom API instance

const contriStore = create((set) => ({
  contributions: null,

  createForm: {
    name: "",
    email: "",
    templateName: "",
    content: "",
  },

  updateForm: {
    _id: null,
    name: "",
    email: "",
    templateName: "",
    content: "",
    approved: false,
  },

  fetchContributions: async () => {
    try {
      const res = await api.get("/contributions");  // Use api instance
      set({ contributions: res.data.contributions });
    } catch (error) {
      console.error("Error fetching contributions:", error);
    }
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

  createContribution: async (e) => {
    e.preventDefault();

    const { createForm, contributions } = contriStore.getState();
    try {
      const res = await api.post("/contributions", createForm);  // Use api instance
      set({
        contributions: [...contributions, res.data.contribution],
        createForm: {
          name: "",
          email: "",
          templateName: "",
          content: "",
        },
      });
    } catch (error) {
      console.error("Error creating contribution:", error);
    }
  },

  deleteContribution: async (_id) => {
    try {
      await api.delete(`/contributions/${_id}`);  // Use api instance
      const { contributions } = contriStore.getState();
      const newContributions = contributions.filter((contribution) => contribution._id !== _id);
      set({ contributions: newContributions });
    } catch (error) {
      console.error("Error deleting contribution:", error);
    }
  },

  handleUpdateFieldChange: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      updateForm: {
        ...state.updateForm,
        [name]: value,
      },
    }));
  },

  toggleUpdate: ({ _id, name, email, templateName, content, approved }) => {
    set({
      updateForm: {
        _id,
        name,
        email,
        templateName,
        content,
        approved,
      },
    });
  },

  updateContribution: async (e) => {
    e.preventDefault();

    const {
      updateForm: { _id, name, email, templateName, content, approved },
      contributions,
    } = contriStore.getState();

    try {
      const res = await api.put(`/contributions/${_id}`, {
        name,
        email,
        templateName,
        content,
        approved,
      });  // Use api instance

      const newContributions = [...contributions];
      const contributionIndex = contributions.findIndex((contribution) => contribution._id === _id);
      newContributions[contributionIndex] = res.data.contribution;

      set({
        contributions: newContributions,
        updateForm: {
          _id: null,
          name: "",
          email: "",
          templateName: "",
          content: "",
          approved: false,
        },
      });
    } catch (error) {
      console.error("Error updating contribution:", error);
    }
  },
}));

export default contriStore ;
