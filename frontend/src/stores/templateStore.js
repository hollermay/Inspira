import { create } from "zustand";
import api from "../api/api";

const useTemplateStore = create((set) => ({
  templates: null,
  template: null,
  createForm: {
    name: "",
    content: "",
  },

  updateForm: {
    _id: null,
    name: "",
    content: "",
  },

  fetchTemplates: async () => {
    // Fetch the templates
    const res = await api.get(`/templates`);

    // Set to state
    set({ templates: res.data.templates });
  },

  fetchTemplate: async (_id) => {
        const res = await api.get(`/templates/${_id}`);
        
        set({ template: res.data.template });
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

  createTemplate: async (e) => {
    e.preventDefault();

    const { createForm, templates } = useTemplateStore.getState();
    const res = await api.post("/templates", createForm);

    set({
      templates: [...templates, res.data.template],
      createForm: {
        name: "",
        content: "",
      },
    });
  },

  deleteTemplate: async (_id) => {
    // Delete the template
    await api.delete(`/templates/${_id}`);
    const { templates } = useTemplateStore.getState();

    // Update state
    const newTemplates = templates.filter((template) => template._id !== _id);

    set({ templates: newTemplates });
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

  toggleUpdate: ({ _id, name, content }) => {
    set({
      updateForm: {
        name,
        content,
        _id,
      },
    });
  },

  updateTemplate: async (e) => {
    e.preventDefault();

    const {
      updateForm: { name, content, _id },
      templates,
    } = useTemplateStore.getState();

    // Send the update request
    const res = await api.put(`/templates/${_id}`, {
      name,
      content,
    });

    // Update state
    const newTemplates = [...templates];
    const templateIndex = templates.findIndex((template) => template._id === _id);
    newTemplates[templateIndex] = res.data.template;

    set({
      templates: newTemplates,
      updateForm: {
        _id: null,
        name: "",
        content: "",
      },
    });
  },
}));

export default useTemplateStore;
