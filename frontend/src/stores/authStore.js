import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
    user: null,
    
    loginForm: {
        email: "",
        password: "",
    },
    
    registerForm: {
        email: "",
        password: "",
    },
    
    updateLoginForm: (e) => {
        const { name, value } = e.target;
    
        set((state) => ({
        loginForm: {
            ...state.loginForm,
            [name]: value,
        },
        }));
    },
    
    updateRegisterForm: (e) => {
        const { name, value } = e.target;
    
        set((state) => ({
        registerForm: {
            ...state.registerForm,
            [name]: value,
        },
        }));
    },
    
    login: async (e) => {
        e.preventDefault();
    
        const { loginForm } = useAuthStore.getState();
        const res = await axios.post("http://localhost:3000/login", loginForm);
    
        set({ user: res.data.user });
    },
    
    signup: async (e) => {
        e.preventDefault();
    
        const { registerForm } = useAuthStore.getState();
        const res = await axios.post("http://localhost:3000/signup", registerForm);
    
        set({ user: res.data.user });
    },
    
    logout: async () => {
        await axios.post("http://localhost:3000/logout");
    
        set({ user: null });
    },
    }));

export default useAuthStore;