import { create } from "zustand";
import api from "../api/api";

const useAuthStore = create((set) => ({
    user: null,
    loginForm: { email: "", password: "" },
    signupForm: { email: "", password: "" },

    updateLoginForm: (e) => {
        const { name, value } = e.target;
        set((state) => ({
            loginForm: { ...state.loginForm, [name]: value },
        }));
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;
        set((state) => ({
            signupForm: { ...state.signupForm, [name]: value },
        }));
    },

    login: async (e) => {
        e.preventDefault();
        const { loginForm } = useAuthStore.getState();
        const { data } = await api.post("/login", loginForm);
        localStorage.setItem("token", data.token);
        set({ user: data.user });
    },

    signup: async (e) => {
        e.preventDefault();
        const { signupForm } = useAuthStore.getState();
        const { data } = await api.post("/signup", signupForm);
        localStorage.setItem("token", data.token);
        set({ user: data.user });
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
    },
}));

export default useAuthStore;
